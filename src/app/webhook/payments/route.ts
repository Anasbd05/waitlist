"use server";
import {updateCustomerId,updatePaidStatus} from "@/utils/supabase/admin";
import crypto from "node:crypto";

export async function POST(request: Request) {
    if(!process.env.LEMONSQUEEZY_WEBHOOK_SECRET) {
        return new Response("Lemon Squeezy Webhook Secret not set in .env",{
            status: 500,
        });
    }

    // First, make sure the request is from Lemon Squeezy.
    const rawBody = await request.text();
    const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;

    const hmac = crypto.createHmac("sha256",secret);
    const digest = Buffer.from(hmac.update(rawBody).digest("hex"),"utf8");
    const signature = Buffer.from(
        request.headers.get("X-Signature") || "",
        "utf8",
    );

    if(!crypto.timingSafeEqual(digest,signature)) {
        return new Response("Invalid signature",{
            status: 500,
        });
    }

    const body = JSON.parse(rawBody);
    console.log(body);

    if(body.meta.event_name === "order_created") {
        const customerEmail = body.data.attributes.user_email;
        const customerId = body.data.attributes.customer_id;
        await updatePaidStatus(customerEmail,"paid");
        await updateCustomerId(customerEmail,customerId);
        return new Response("Order Complete",{status: 200});
    }

    return new Response("Webhook Processed",{status: 200});
}
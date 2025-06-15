"use server";

import {updateCustomerId,updatePaidStatus} from "@/utils/supabase/admin";
import crypto from "node:crypto";

export async function POST(request: Request) {
    if(!process.env.LEMONSQUEEZY_WEBHOOK_SECRET) {
        return new Response("Lemon Squeezy Webhook Secret not set in .env",{status: 500});
    }

    const rawBody = await request.text();
    const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;

    const hmac = crypto.createHmac("sha256",secret);
    const digest = Buffer.from(hmac.update(rawBody).digest("hex"),"utf8");
    const signature = Buffer.from(request.headers.get("X-Signature") || "","utf8");

    if(!crypto.timingSafeEqual(digest,signature)) {
        return new Response("Invalid signature",{status: 401});
    }

    const body = JSON.parse(rawBody);
    console.log("Received webhook from LemonSqueezy:",body);

    if(body.meta?.event_name === "order_created") {
        const customerEmail = body.data.attributes?.user_email;
        const customerId = body.data.attributes?.customer_id.toString(); // convert to string for DB
        const priceCents = body.data.attributes?.total || 0;
        const price = priceCents / 100;
        let plan;
        if(price === 149.00) {
            plan = "Core";
        } else if(price === 120.00) {
            plan = "Pro";
        } else if(price === 14.00) {
            plan = "Starter";
        } else {
            plan = "Unknown plan";
        }

        await updatePaidStatus(customerEmail,"paid",plan,price);
        await updateCustomerId(customerEmail,customerId);

        return new Response("Order processed successfully",{status: 200});
    }

    return new Response("Webhook processed.",{status: 200});
}

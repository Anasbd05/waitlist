"use server";

import {createClient} from "@supabase/supabase-js";
import {Database} from "../../../types/database";

export async function createAdminClient() {
    return createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
}

export async function updateCustomerId(email: string,customerId: string) {
    const supabase = await createAdminClient();
    return supabase
        .from("users")
        .update({customer_id: customerId})
        .eq("email",email);
}

export async function updatePaidStatus(
    userEmail: string,
    paidTier: string,
    planName: string,
    price: number
) {
    const supabase = await createAdminClient();
    return supabase
        .from("users")
        .update({paid_tier: paidTier,plan_name: planName,price})
        .eq("email",userEmail);
}

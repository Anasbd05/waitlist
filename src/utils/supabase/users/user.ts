import {SupabaseClient} from "@supabase/supabase-js";

export async function getCustomerIdFromUserId(
    supabaseClient: SupabaseClient,
    userId: string,
) {
    const {data,error} = await supabaseClient
        .from("users")
        .select("customer_id")
        .eq("user_id",userId)
        .single();

    if(error) {
        console.error("Error getting customer ID:",error);
        return null;
    }

    return data.customer_id as string;
}

export async function hasUserPaid(
    supabaseClient: SupabaseClient,
    userId: string,
) {
    const {data,error} = await supabaseClient
        .from("users")
        .select("paid_tier")
        .eq("user_id",userId)
        .single();

    console.log(data);
    if(error) {
        return false;
    }

    if(!data) {
        return false;
    }
    return data.paid_tier === "paid";
}
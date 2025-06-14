// import { createNewCustomer } from "@/lib/lemon-squeezy/server";
// import { updateCustomerId } from "@/lib/supabase/admin";
import {createNewCustomer} from "@/utils/lemon-squeezy/server";
import {updateCustomerId} from "@/utils/supabase/admin";
import {exchangeCodeForSession} from "@/utils/supabase/auth";
import {getCustomerIdFromUserId} from "@/utils/supabase/users/user";
import {createClient} from "@/utils/supabase/server";
import {after,NextRequest,NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");

    if(code) {
        const supabase = await createClient();
        const res = await exchangeCodeForSession(supabase,code);
        if(res.error || !res.data.user) {
            return NextResponse.redirect(requestUrl.origin);
        }

        // TODO: use after create customer if needed
        after(async () => {
            const userId = res.data.user!.id;
            if(!res.data.user!.email) {
                console.error("User email is missing");
            }
            const customerId = await getCustomerIdFromUserId(supabase,userId);
            if(!customerId) {
                const customer = await createNewCustomer(res.data.user!.email!);
                await updateCustomerId(userId,customer?.data?.data?.id!);
            }
        });
    }

    // URL to redirect to after sign in process completes
    return NextResponse.redirect(requestUrl.origin);
}
import {pricingPlans} from '@/assets/assets';
import {createCheckoutUrl} from '@/utils/lemon-squeezy/server';
import {getCurrentUser,isAuthenticated} from '@/utils/supabase/auth';
import {createClient} from '@/utils/supabase/server';
import Link from 'next/link';
import {redirect} from 'next/navigation';
import {Check} from 'lucide-react';
import React from 'react';
import {Button} from '@/components/ui/button';

const BillingPage = async () => {
    const supabase = await createClient();
    const session = await getCurrentUser(supabase);

    if(!session || !isAuthenticated) {
        redirect('/signup');
    }
    const email = session?.user?.email;

    // Retrieve the current user's plan from Supabase
    const {data,error} = await supabase
        .from('users')
        .select('*')
        .eq('email',email)
        .single();

    if(error) {
        console.error('Error retrieving user from Supabase!',error);
    }

    const currentPlan = data.plan_name


    // Prepare checkout URLs for all plans
    const checkoutUrls = await Promise.all(
        pricingPlans.map(async (plan) => {
            const url = await createCheckoutUrl({variantId: plan.variant_id,embed: true,userEmail: email});
            return {variantId: plan.variant_id,url};
        })
    );

    // Helper to find checkout URL by variantId
    const getCheckoutUrl = (variantId: string) => {
        const found = checkoutUrls.find((c) => c.variantId === variantId);
        return (found && found.url !== null) ? found.url : '#';
    };

    return (
        <section className="mt-5 w-[99%] pb-8 mx-auto">
            <div className="flex flex-col mb-6">
                <h1 className="text-2xl font-semibold mb-1">Plans & Billing</h1>
                <p className="text-muted-foreground">
                    Manage your subscription and billing information
                </p>
            </div>

            <main className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 justify-center items-center">
                {pricingPlans.map((plan,index) => (
                    <div
                        key={index}
                        className="p-8 border rounded-lg lg:h-[430px] shadow-sm flex flex-col justify-between"
                    >
                        <div className="flex flex-col mb-4 gap-2">
                            <h2 className="text-lg font-semibold text-neutral-700">
                                {plan.title}
                            </h2>
                            <h1 className="font-bold text-4xl tag">
                                ${plan.price}
                                {plan.title !== 'Beast' && (
                                    <span className="px-1 text-lg text-muted-foreground font-medium">
                                        {plan.billing}
                                    </span>
                                )}

                            </h1>
                        </div>

                        <ul className="flex flex-col mb-4 gap-3">
                            <span className="text-muted-foreground text-sm">
                                What Includes :
                            </span>
                            {plan.features.map((feature,i) => (
                                <li key={i} className="flex gap-4 items-center">
                                    <Check className="text-green-600" />
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>


                        {currentPlan === plan.title ? (
                            <Button variant={"outline"}>Current Plan</Button>
                        ) : (
                            <Link
                                href={getCheckoutUrl(plan.variant_id)}
                                className="hover:opacity-80 w-full rounded-lg bg-black py-2 text-center text-white"
                            >
                                Switch Plan
                            </Link>
                        )}

                    </div>
                ))}
            </main>
        </section>
    );
};

export default BillingPage;

import {createClient} from '@/utils/supabase/server'
import React from 'react'
import {getProducts,getSubscription,getUser} from '@/utils/supabase/queries'
import {redirect} from 'next/navigation'
import Plans from "@/components/billing/Plans"


const page = async () => {


    const supabase = await createClient()

    const [user,products,subscription] = await Promise.all([
        getUser(supabase),
        getProducts(supabase),
        getSubscription(supabase)
    ])

    if(!user) {
        return redirect('/login')
    }

    return (
        <section className='space-y-4'>
            <div>
                <h1 className='text-3xl font-bold tracking-tight'>Plans & Billing</h1>
                <p className='text-muted-foreground'>
                    Manage your subscription and billing information
                </p>
            </div>
            <div className="grid gap-10">
                <Plans user={user} products={products || []} subscription={subscription} />
            </div>
        </section>
    )
}

export default page

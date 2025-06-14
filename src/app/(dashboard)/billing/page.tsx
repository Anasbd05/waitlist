import {pricingPlans} from '@/assets/assets'
import {Button} from '@/components/ui/button'
import {Check} from 'lucide-react'
import React from 'react'

const BillingPage = () => {
    return (
        <section className="mt-5 w-[99%] pb-8 mx-auto">
            <div className="flex flex-col mb-6">
                <h1 className="text-2xl font-semibold mb-1">Plans & Billing</h1>
                <p className='text-muted-foreground'>Manage your subscription and billing information</p>
            </div>
            <main className='grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10 justify-center items-center '>
                {
                    pricingPlans.map((pricing,index) => (
                        <div className={`p-8 border rounded-lg h-[430px] shadow-sm flex flex-col justify-between `} key={index}>
                            <div className='flex flex-col mb-2 gap-2'>
                                <h2 className={`text-lg font-semibold text-neutral-700`}>{pricing.title}</h2>
                                <h1 className={`font-bold text-4xl tag`}>
                                    ${pricing.price}
                                    {pricing.title !== "Beast" && <span className=' px-1 text-lg text-muted-foreground font-medium'>{pricing.billing}</span>}
                                </h1>
                            </div>
                            <ul className='flex flex-col mb-4 gap-3'>
                                <span className='text-muted-foreground text-sm '>What Includes :</span>
                                {pricing.features.map((feature,index) => (
                                    <li key={index} className='flex gap-4 items-center' >
                                        <Check />
                                        <p>{feature}</p>
                                    </li>
                                ))}
                            </ul>
                            <Button className='hover:opacity-90 cursor-pointer'>
                                Choose Plan
                            </Button>
                        </div>
                    ))
                }
            </main>
        </section>
    )
}

export default BillingPage

import React from 'react'
import {Tables} from '../../../types_db'
import {User} from '@supabase/supabase-js'
import {Card,CardContent,CardFooter} from '../ui/card'
import PricingSheet from './PricingSheet'

type Product = Tables<"products">
type Price = Tables<"prices">
type Subscription = Tables<"subscriptions">

interface ProductWithPrices extends Product {
    prices: Price[]
}
interface PriceWithProduct extends Price {
    products: Product | null
}

interface SubscriptionWithProduct extends Subscription {
    prices: PriceWithProduct | null
}

interface PlansProps {
    subscription: SubscriptionWithProduct | null
    user: User | null
    products: ProductWithPrices[] | null
}

const Plans = (
    {user,products,subscription}: PlansProps
) => {

    if(!subscription || subscription.status !== "active") {
        return <Card className='max-w-5xl'>
            <CardContent className='px-5 py-4'>
                <div className='pb-4  flex flex-wrap gap-x-2 items-center'>
                    <span className='text-base font-semibold'>Plan Summary</span>
                    <h3 className='py-1 px-4 text-sm font-semibold bg-gray-100 text-black rounded-full'>No Plan</h3>
                </div>
            </CardContent>
            <CardFooter className='border-t border-border px-4 py-3'>
                <span className='flex ml-auto flex-row'>
                    <PricingSheet user={user} products={products ?? []} subscription={subscription} />
                </span>
            </CardFooter>
        </Card>
    }


    return (
        <div>

        </div>
    )
}

export default Plans

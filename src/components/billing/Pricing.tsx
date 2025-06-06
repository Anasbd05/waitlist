import React from 'react'
import Link from 'next/link'
import {Tables} from '../../../types_db'

type Product = Tables<"products">
type Price = Tables<"prices">

interface ProductWithPrices extends Product {
    prices: Price[]
}

interface PricingProps {
    products: ProductWithPrices[]
}




const Pricing = ({products}: PricingProps) => {

    return (
        <main className='grid grid-cols-2 gap-x-4 lg:grid-cols-3 mt-5 justify-center items-center '>
            {
                products.map((pricing,index) => (
                    <div className={`px-6 py-5 border flex flex-col justify-between ${pricing.name !== "Pro" && " bg-black text-white"} `} key={index}>
                        <div className='flex flex-col mb-10 gap-2'>
                            <h2 className={`text-lg font-semibold text-neutral-700 ${pricing.name !== "Pro" && "text-white/90"} `}>{pricing.name}</h2>
                            <h1 className={`font-bold text-4xl ${pricing.name !== "Pro" ? "text-white font-header font-bold tracking-tight" : "tag"} `}>
                                ${pricing.prices.map((price) => price.unit_amount)}
                                {pricing.name === "Pro" && <span className=' px-1 text-lg text-neutral-600 font-medium'>/{pricing.prices.map((price) => price.interval)} </span>}
                            </h1>
                        </div>
                        <Link href={"/signup"} className={` py-2.5 w-full flex justify-center rounded-full cursor-pointer hover:shadow-[3px_3px] duration-500 hover:-translate-1 font-medium   ${pricing.name !== "Pro" ? "hover:bg-[#2f5180] shadow-white hover:text-white  bg-white text-black" : "text-white shadow-black hover:text-black hover:bg-accent bg-black"}  `}>Subscribe</Link>
                        {pricing.name !== "Pro" && <p className={`font-medium text-sm text-center mt-2 text-white/90 `}>
                            Pay once , Use forever
                        </p>
                        }
                    </div>
                ))
            }
        </main>
    )
}

export default Pricing

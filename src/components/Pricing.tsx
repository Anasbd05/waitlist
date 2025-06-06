import {Check} from 'lucide-react'
import React from 'react'
import {Tables} from '../../types_db'
import Link from 'next/link'

type Product = Tables<"products">
type Price = Tables<"prices">

interface ProductWithPrices extends Product {
    prices: Price[]
}

interface PricingProps {
    products: ProductWithPrices[]
}

const Pricing = ({products}: PricingProps) => {

    console.log(products)

    return (
        <section id='pricing' className='py-12 w-11/12 mx-auto'>
            <div className="flex items-center flex-col">
                <h1 className='tag font-header text-lg mb-2'>Pricing</h1>
                <p className='font-bold text-3xl lg:text-5xl tracking-tight font-header '>Generate Ads fast, with less effort.</p>
            </div>
            <main className='flex md:flex-row flex-col mt-18 justify-center items-center '>
                {
                    products.map((pricing,index) => (
                        <div className={`px-10 py-7 w-[360px] border flex flex-col justify-between ${pricing.name !== "Pro" && "md:scale-110 scale-105 bg-black text-white"} `} key={index}>
                            <div className='flex flex-col mb-10 gap-2'>
                                <h2 className={`text-lg font-semibold text-neutral-700 ${pricing.name !== "Pro" && "text-white/90"} `}>{pricing.name}</h2>
                                <h1 className={`font-bold text-4xl ${pricing.name !== "Pro" ? "text-white font-header font-bold tracking-tight" : "tag"} `}>
                                    ${pricing.prices.map((price) => price.unit_amount)}
                                    {pricing.name === "Pro" && <span className=' px-1 text-lg text-neutral-600 font-medium'>/{pricing.prices.map((price) => price.interval)} </span>}
                                </h1>

                                {pricing.prices.map((price,i) => price.interval === "year" &&
                                    <p key={i} className='text-green-600 text-sm'>$10/Month ,Save $48 with yearly pricing(30% off)</p>
                                )}
                            </div>
                            <ul className='flex flex-col mb-8 gap-6'>
                                {Object.values(pricing.metadata || {}).map((feature,index) => (
                                    <li key={index} className='flex gap-4 items-center' >
                                        <Check />
                                        <p>{feature}</p>
                                    </li>
                                ))}
                            </ul>
                            <Link href={"/signup"} className={` py-2.5 w-full flex justify-center rounded-full cursor-pointer hover:shadow-[3px_3px] duration-500 hover:-translate-1 font-medium   ${pricing.name !== "Pro" ? "hover:bg-[#2f5180] shadow-white hover:text-white  bg-white text-black" : "text-white shadow-black hover:text-black hover:bg-accent bg-black"}  `}>Get Started</Link>
                            {pricing.name !== "Pro" && <p className={`font-medium text-sm text-center mt-2 text-white/90 `}>
                                Pay once , Use forever
                            </p>
                            }
                        </div>
                    ))
                }
            </main>
        </section>
    )
}

export default Pricing

import {Check} from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import {pricingPlans} from '@/assets/assets'

const Pricing = () => {


    return (
        <section id='pricing' className='py-14 bg-white lg:py-20 '>
            <main className='w-11/12 mx-auto'>

                <div className="flex items-center flex-col">
                    <h1 className='tag font-header text-lg mb-2'>Pricing</h1>
                    <p className='font-bold text-3xl lg:text-5xl tracking-tight font-header '>Generate Ads fast, with less effort.</p>
                </div>
                <main className='grid grid-cols-1 md:grid-cols-2 lg:flex flex-row  gap-x-0 mt-18 justify-center items-center '>
                    {
                        pricingPlans.map((pricing,index) => (
                            <div className={`px-10 py-7 sm:w-[360px] shadow-sm border gap-y-2 flex flex-col justify-between ${pricing.title === "Core" && "md:scale-110 scale-105 bg-black text-white"} `} key={index}>
                                <div className='flex flex-col mb-8 gap-2'>
                                    <h2 className={`text-lg font-semibold text-neutral-700 ${pricing.title === "Core" && "text-white/90"} `}>{pricing.title}</h2>
                                    <h1 className={`font-bold text-4xl ${pricing.title === "Core" ? "text-white font-header font-bold tracking-tight" : "tag"} `}>
                                        ${pricing.price}
                                        {pricing.title !== "Core" && <span className=' px-1 text-lg text-neutral-600 font-medium'>{pricing.billing}</span>}
                                    </h1>

                                    {pricing.title === "Pro" && <p className='text-green-600 text-sm'>$10/Month ,Save $48 with yearly pricing(30% off)</p>}
                                </div>
                                <ul className='flex flex-col mb-6 gap-4'>
                                    {pricing.features.map((feature,index) => (
                                        <li key={index} className='flex gap-4 items-center' >
                                            <Check />
                                            <p>{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                                <Link href={"/signup"} className={` py-2.5 w-full flex justify-center rounded-full cursor-pointer hover:shadow-[3px_3px] duration-500 hover:-translate-1 font-medium   ${pricing.title === "Core" ? "hover:bg-[#2f5180] shadow-white hover:text-white  bg-white text-black" : "text-white shadow-black hover:text-black hover:bg-accent bg-black"}  `}>Get Started</Link>
                                {pricing.title === "Core" && <p className={`font-medium text-sm text-center mt-2 text-white/90 `}>
                                    Pay once , Use forever
                                </p>
                                }
                            </div>
                        ))
                    }
                </main>
            </main>
        </section>
    )
}

export default Pricing
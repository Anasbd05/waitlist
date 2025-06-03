import {pricingPlans} from '@/assets/assets'
import {Check} from 'lucide-react'
import React from 'react'

const Pricing = () => {
    return (
        <section className='py-12 w-11/12 mx-auto'>
            <div className="flex items-center flex-col">
                <h1 className='tag font-header text-lg mb-2'>Pricing</h1>
                <p className='font-bold text-3xl lg:text-5xl tracking-tight font-header '>Generate Ads fast, with less effort.</p>
            </div>
            <main className='flex md:flex-row flex-col mt-18 justify-center items-center '>
                {
                    pricingPlans.map((pricing,index) => (
                        <div className={`px-10 py-7 w-[360px] border flex flex-col justify-between ${pricing.title !== "Pro" && "md:scale-110 scale-105 bg-black text-white"} `} key={index}>
                            <div className='flex flex-col mb-10 gap-2'>
                                <h2 className={`text-lg font-semibold text-neutral-700 ${pricing.title !== "Pro" && "text-white/90"} `}>{pricing.title}</h2>
                                <h1 className={`font-bold text-4xl ${pricing.title !== "Pro" ? "text-white font-header font-bold tracking-tight" : "tag"} `}>
                                    ${pricing.price}
                                    <span className=' px-1 text-lg text-neutral-600 font-medium'>{pricing.billing} </span>
                                </h1>
                                <p className='text-green-600 text-sm'>{pricing.Save}</p>
                            </div>
                            <ul className='flex flex-col mb-8 gap-6'>
                                {pricing.features.map((feature,i) => (
                                    <li key={i} className='flex gap-4 items-center' >
                                        <Check />
                                        <p>{feature}</p>
                                    </li>
                                ))}
                            </ul>
                            <button className={` py-2.5 w-full rounded-full cursor-pointer hover:shadow-[3px_3px] duration-500 hover:-translate-1 font-medium   ${pricing.title !== "Pro" ? "hover:bg-[#2f5180] shadow-white hover:text-white  bg-white text-black" : "text-white shadow-black hover:text-black hover:bg-accent bg-black"}  `}>Get Started</button>
                            <p className={`font-medium text-sm text-center mt-2 ${pricing.title !== "Pro" ? "text-white/80" : "text-black/80"} `}>
                                {pricing.bonus}
                            </p>
                        </div>
                    ))
                }
            </main>
        </section>
    )
}

export default Pricing

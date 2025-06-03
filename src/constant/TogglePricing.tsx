'use client'

import {Check} from 'lucide-react'
import React,{useState} from 'react'

const PricingToggleClient = ({pricingPlans}) => {
    const [year,setYear] = useState(false)

    return (
        <>
            <div className='bg-gray-200 mt-18 w-60 p-1 flex rounded-lg border justify-center'>
                <button onClick={() => setYear(false)} className={`py-2 w-full ${!year ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    Monthly
                </button>
                <button onClick={() => setYear(true)} className={`py-2 w-full ${year ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    Yearly
                </button>
            </div>

            <main className='flex md:flex-row flex-col mt-8 justify-center items-center'>
                {pricingPlans.map((pricing,index) => {
                    const isPro = pricing.title === 'Pro'
                    const isOneTime = pricing.oneTimePrice !== undefined
                    const priceDisplay = isOneTime
                        ? pricing.oneTimePrice
                        : year
                            ? pricing.Yearlyprice
                            : pricing.price

                    return (
                        <div key={index} className={`p-7 w-[360px] border flex flex-col justify-between ${!isPro && 'md:scale-110 scale-105 bg-black text-white'}`}>
                            <div className='flex flex-col mb-10 gap-2'>
                                <h2 className={`text-lg font-semibold text-neutral-700 ${!isPro && 'text-white/90'}`}>{pricing.title}</h2>
                                <h1 className={`font-bold text-4xl ${!isPro ? 'text-white font-header font-bold tracking-tight' : 'tag'}`}>
                                    ${priceDisplay}
                                    {!isOneTime && <span className='px-1 text-lg text-neutral-600 font-medium'>/{year ? 'year' : 'month'}</span>}
                                </h1>
                            </div>
                            <ul className='flex flex-col mb-8 gap-6'>
                                {pricing.features.map((feature,i) => (
                                    <li key={i} className='flex gap-4 items-center'>
                                        <Check />
                                        <p>{feature}</p>
                                    </li>
                                ))}
                            </ul>
                            <button className={`py-3 w-full rounded-full cursor-pointer hover:shadow-[3px_3px] duration-500 hover:-translate-1 font-medium ${!isPro ? 'hover:bg-[#2f5180] shadow-white hover:text-white bg-white text-black' : 'text-white shadow-black hover:text-black hover:bg-accent bg-black'}`}>
                                Get Started
                            </button>
                            <p className={`font-medium text-sm text-center mt-4 ${!isPro ? 'text-white/80' : 'text-black/80'}`}>{pricing.deal}</p>
                        </div>
                    )
                })}
            </main>
        </>
    )
}

export default PricingToggleClient

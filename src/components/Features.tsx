import React from 'react'
import {features} from "@/assets/assets"
import Image from 'next/image'

const Features = () => {
    return (
        <section id='features' className=' py-8  lg:py-14 bg-accent/70'>
            <main className=' lg:w-11/12 sm:px-5 md:px-10 lg:px-0 ml-auto  flex  justify-center flex-col lg:flex-row  gap-10 items-center'>
                <div className="flex px-4 flex-col lg:w-2/4">
                    <h1 className=' text-4xl md:text-5xl lg:text-[65px] tag mb-8'>Why choose Ads fast?</h1>
                    <p className='mb-4 lg:mb-10  text-lg'>Tired of wasting hours on ads that don’t convert? Our AI tool instantly creates scroll-stopping
                        ad copy and visuals for any platform — no design or writing skills needed. Save time,
                        boost results, and grow your business with ease.
                    </p>
                    <button className='bg-black hidden lg:block font-medium cursor-pointer hover:opacity-80 rounded-xl py-2.5 text-white w-36 '>Get started</button>
                </div>
                <div className="lg:w-2/4 grid border grid-cols-2">
                    {features.map((feature,index) => (
                        <div key={index} className={` p-5 border flex flex-col items-center border-neutral-800 `}
                            style={{backgroundColor: feature.bg}} >
                            <Image src={feature.icon} width={150} height={150} alt='feature images' />
                            <h1 className='mb-4 text-2xl font-header text-center font-semibold'>{feature.title}</h1>
                            <p className='text-center'>{feature.description}</p>
                        </div>
                    ))}
                </div>

            </main>

        </section>
    )
}

export default Features

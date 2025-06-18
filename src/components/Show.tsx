import Image from 'next/image'
import React from 'react'
import screen from "@/assets/screenshot.jpeg"

const Show = () => {
    return (
        <section className='bg-gradient-to-b from-white to-indigo-200'>
            <section className='py-14 md:py-16 lg:py-20 w-11/12 mx-auto'>
                <div className="flex items-center flex-col">
                    <h1 className='tag font-header text-lg mb-4'>Effortless Ads</h1>
                    <p className='font-bold text-3xl lg:text-4xl tracking-tight font-header'>
                        A More Effective Way to Generate Ads
                    </p>
                    <Image src={screen} alt='screenshot image' draggable={false} className='mt-12 rounded-lg ring ring-neutral-400 shadow-md p-1  ' width={1000} height={800} />
                </div>
            </section>
        </section>
    )
}

export default Show

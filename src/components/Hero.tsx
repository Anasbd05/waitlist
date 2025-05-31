import {Check} from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import heropic from "@/assets/hero.png"

const Hero = () => {


    const features = [
        {
            title: "Easy to Use"
        },
        {
            title: "Flexible pricing"
        },
        {
            title: "Scroll-Stopping Visuals"
        },
        {
            title: "Generate in Any Language"
        }
    ]

    return (
        <section className='py-10 md:py-12 lg:py-14'>
            <main className='w-11/12 mx-auto flex  justify-center lg:justify-between items-center'>
                <div className="flex flex-col lg:w-2/4">
                    <h1 className='text-4xl md:text-5xl xl:text-6xl font-bold lg:leading-[60px] font-header bg-gradient-to-b from-black to-blue-700 bg-clip-text text-transparent '>Writing ads is hard — we make it effortless.</h1>
                    <p className=' lg:leading-relaxed mt-5'>Generate high-converting ads for any social media platform in seconds with
                        AI-powered copy and visuals. Just enter your product or service — no writing
                        or design skills needed.
                    </p>
                    <ul className='mt-5 flex flex-col gap-3'>
                        {features.map(({title},index) => (
                            <div className="flex gap-4" key={index}>
                                <Check className='text-blue-400' />
                                <li className='text-gray-700 font-semibold'>{title}</li>
                            </div>
                        ))}
                    </ul>
                    <button className='w-36 py-2 bg-accent font-bold rounded-lg mt-4 '>Get Started</button>
                </div>
                <div className="hidden lg:flex flex-col items-center lg:w-2/4">
                    <span className='text-black ring ring-accent bg-accent/70 py-1 rounded-full px-10'>✨ The AI Ads Generator</span>
                    <Image src={heropic} width={800} height={600} alt='hero image' draggable={false} />
                </div>

            </main>
        </section>
    )
}

export default Hero

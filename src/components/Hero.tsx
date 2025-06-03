import Image from 'next/image'
import React from 'react'
import heropic from "@/assets/hero.png"
import {BrainCircuit} from 'lucide-react'

const Hero = () => {




    return (
        <section className='py-10 md:py-12 flex flex-col items-center lg:py-14'>
            <div className="flex text-black ring ring-purple-500 bg-gradient-to-b px-14 from-purple-400 to-accent justify-center items-center gap-8 py-1 rounded-full">
                <BrainCircuit className='h-5 w-5' />
                <span>The AI ads generator</span>
            </div>

            <main className='w-11/12 mx-auto flex  justify-center lg:justify-between items-center'>
                <div className="flex flex-col lg:w-2/4">
                    <h1 className='text-4xl md:text-5xl xl:text-6xl py-2 tag '>Fast, high-performing ads</h1>
                    <p className=' lg:leading-relaxed mt-5'>Generate high-converting ads for any social media platform in seconds with
                        AI-powered copy and visuals. Just enter your product or service — no writing
                        or design skills needed.
                    </p>
                    <button className='w-36 py-2 bg-accent font-medium rounded-lg mt-8 cursor-pointer hover:shadow-[3px_3px] duration-500 hover:-translate-1 '>Get Started</button>
                </div>
                <div className="hidden lg:flex flex-col items-center lg:w-2/4">
                    <Image src={heropic} width={800} height={800} alt='hero image' draggable={false} />
                </div>
            </main>
        </section>
    )
}

export default Hero

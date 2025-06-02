"use client"
import {motion} from 'framer-motion'
import React from 'react'



const Tricker = () => {


    return (
        <div className='bg-[#fed396] border-t border-b py-6 '>
            <main className='flex  overflow-hidden'>
                <motion.div
                    animate={{
                        translateX: '-50%',
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }} className="flex justify-center gap-14 flex-none pr-14">

                    <h3 className='text-2xl font-bold font-header uppercase'>Easy to Use</h3>
                    <h3 className='text-2xl font-bold font-header uppercase'>Flexible pricing</h3>
                    <h3 className='text-2xl font-bold font-header uppercase'>Scroll-Stopping Visuals</h3>
                    <h3 className='text-2xl font-bold font-header uppercase'>Generate in Any Language</h3>

                    {/* Second  */}

                    <h3 className='text-2xl font-bold font-header uppercase'>Easy to Use</h3>
                    <h3 className='text-2xl font-bold font-header uppercase'>Flexible pricing</h3>
                    <h3 className='text-2xl font-bold font-header uppercase'>Scroll-Stopping Visuals</h3>
                    <h3 className='text-2xl font-bold font-header uppercase'>Generate in Any Language</h3>

                </motion.div>
            </main>

        </div>
    )
}

export default Tricker

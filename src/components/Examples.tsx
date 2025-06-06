import ExamplesSlider from '@/constant/ExamplesSlider'
import React from 'react'

const Examples = () => {
    return (
        <div className='py-14'>
            <main className='w-11/12 mx-auto'>
                <div className="flex items-center flex-col">
                    <h1 className='tag text-lg'>Examples</h1>
                    <p className='text-3xl md:text-4xl lg:text-[55px] font-header font-medium '>All generated by our AI</p>
                </div>
                <ExamplesSlider />
            </main>
        </div>
    )
}

export default Examples

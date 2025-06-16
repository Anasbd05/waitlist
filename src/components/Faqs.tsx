import {faqs} from '@/assets/assets'
import React from 'react'

const Faqs = () => {
    return (
        <section id='faqs' className=' py-14  bg-gradient-to-b from-white to-[#D2DCFF]  md:py-16 lg:py-20'>
            <main className="flex flex-col w-11/12 mx-auto gap-10 md:flex-row">
                <div className="flex flex-col items-center lg:items-start lg:w-2/4   gap-3">
                    <h1 className="text-xl tag">FAQS</h1>
                    <p className='text-3xl lg:text-5xl font-bold font-header'>Got questions? We&lsquo;ve got answers</p>
                </div>
                <div className="flex flex-col w-full gap-4 lg:w-2/4">
                    {faqs.map((faq,index) => (
                        <div key={index} className="join w-full shadow-sm p-1  shadow-gray-400 rounded-md join-horizontal ">
                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <h1 className="collapse-title font-semibold text-black">{faq.question} </h1>
                                <p className="collapse-content text-sm text-neutral-700">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </section >
    )
}

export default Faqs
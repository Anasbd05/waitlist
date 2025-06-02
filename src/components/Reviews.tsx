import React from 'react'
import {reviews} from '@/assets/assets'

const Reviews = () => {

    const FirstCol = reviews.slice(0,4);
    const SecondCol = reviews.slice(4,8);
    const ThirdCol = reviews.slice(8,12);

    return (
        <section className='py-10 md:py-12 bg-gray-100 lg:py-16'>
            <main className='w-11/12 mx-auto'>
                <div className="flex items-center flex-col">
                    <h1 className='tag text-4xl md:text-5xl lg:text-[65px]'>Reviews</h1>
                    <p className='mt-2 text-lg text-neutral-700'>What are people saying about us?</p>
                </div>
                <main className='flex gap-10 items-center mt-10 '>
                    <div className="flex flex-col gap-6">
                        {FirstCol.map((review,index) => (
                            <div key={index} className='p-5 rounded-lg shadow-md '>
                                <div className="flex justify-between mb-5">
                                    <div className="flex flex-col">
                                        <h3 className='font-semibold'>{review.name}</h3>
                                        <span className='text-xs'>{review.username}</span>
                                    </div>
                                    <span>{review.socialMedia}</span>
                                </div>
                                <p className='text-sm text-neutral-800 leading-relaxed'>{review.review}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-6">
                        {SecondCol.map((review,index) => (
                            <div key={index} className='p-5 rounded-lg shadow-md '>
                                <div className="flex justify-between mb-5">
                                    <div className="flex flex-col">
                                        <h3 className='font-semibold'>{review.name}</h3>
                                        <span className='text-xs'>{review.username}</span>
                                    </div>
                                    <span>{review.socialMedia}</span>
                                </div>
                                <p className='text-sm text-neutral-800 leading-relaxed'>{review.review}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-6">
                        {ThirdCol.map((review,index) => (
                            <div key={index} className='p-5 rounded-lg shadow-md '>
                                <div className="flex justify-between mb-5">
                                    <div className="flex flex-col">
                                        <h3 className='font-semibold'>{review.name}</h3>
                                        <span className='text-xs'>{review.username}</span>
                                    </div>
                                    <span>{review.socialMedia}</span>
                                </div>
                                <p className='text-sm text-neutral-800 leading-relaxed'>{review.review}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </main>
        </section>
    )
}

export default Reviews

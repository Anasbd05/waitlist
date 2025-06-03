"use client"
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay,Pagination} from 'swiper/modules';
import {examples} from '@/assets/assets';
import Image from 'next/image';


const ExamplesSlider = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            rewind={true}
            loop={true}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
            centeredSlides
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            pagination={{clickable: true}}
            modules={[Autoplay,Pagination]}
            className="max-w-[400px] sm:max-w-[650px] md:max-w-[800px] mx-auto lg:max-w-[1024px] mt-10 xl:max-w-[1440px] ">
            {examples.map((image,index) => (
                <SwiperSlide
                    key={index}
                    className="w-full mx-auto px-4 py-8 cursor-grab">
                    <Image src={image.image} className='w-full rounded-md object-cover' width={500} height={800} alt={image.alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ExamplesSlider

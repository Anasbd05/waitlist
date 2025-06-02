import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.png'

const Navbar = () => {
    return (
        <section className='py-5 px-4 lg:px-14 flex w-full justify-between sticky top-0 backdrop-blur-sm shadow-gray-200'>
            <Link href={"/"} className='flex gap-0.5 items-center'>
                <Image src={logo} alt='Ads fast logo' width={45} height={45} />
                <h1 className='font-bold font-noto-head text-xl'>AdsFast</h1>
            </Link>
            <div className="lg:flex items-center gap-6 hidden">
                <Link className='hover:underline decoration-primary underline-offset-4 ' href={"#features"}>Features</Link>
                <Link className='hover:underline decoration-primary underline-offset-4 ' href={"#reviews"}>Testimonials</Link>
                <Link className='hover:underline decoration-primary underline-offset-4 ' href={"#pricing"}>Pricing</Link>
                <Link className='hover:underline decoration-primary underline-offset-4 ' href={"#faqs"}>Faqs</Link>
            </div>
            <button className='py-2 px-5 rounded-lg hover:opacity-80 bg-black  cursor-pointer text-white'>Login</button>
        </section>
    )
}

export default Navbar

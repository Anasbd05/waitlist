import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.png'
import {Menu} from 'lucide-react'
import {createClient} from '@/utils/supabase/server'

const Navbar = async () => {
    const supabase = createClient()
    const {data: {user}} = await supabase.auth.getUser()

    return (
        <section className='py-4 px-4 rounded-xl w-11/12 mx-auto lg:px-14 flex justify-between top-4 items-center sticky z-50 shadow-md border-gray-400 bg-white'>
            <Link href={"/"} className='flex gap-0.5 items-center'>
                <Image src={logo} alt='Ads fast logo' width={45} height={45} />
                <h1 className='font-bold font-noto-head text-xl'>RankyAds</h1>
            </Link>
            <div className="lg:flex items-center gap-6 hidden">
                <Link className='hover:text-primary font-medium ' href={"#features"}>Features</Link>
                <Link className='hover:text-primary font-medium ' href={"#reviews"}>Testimonials</Link>
                <Link className='hover:text-primary font-medium ' href={"#pricing"}>Pricing</Link>
                <Link className='hover:text-primary font-medium ' href={"#faqs"}>Faqs</Link>
            </div>
            {user ? <Link href={"/dashboard"}
                className='py-2 px-5 rounded-lg hover:opacity-80 bg-black hidden md:block cursor-pointer text-white' >
                Dashboard
            </Link> : <Link href={"/login"}
                className='py-2 px-5 rounded-lg hover:opacity-80 bg-black hidden md:block cursor-pointer text-white' >
                Login
            </Link>}
            <Menu className='text-black md:hidden' />
        </section>
    )
}

export default Navbar

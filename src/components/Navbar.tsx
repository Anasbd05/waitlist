import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <section className='py-5 px-14 flex w-full justify-between shadow-gray-200'>
            <h1 className='text-3xl font-bold'>Anas<span className='text-orange-500'>Fox</span> </h1>
            <div className="flex items-center gap-6">
                <Link href={"#"}>Home</Link>
                <Link href={"#"}>Services</Link>
                <Link href={"#"}>Pricing</Link>
                <Link href={"#"}>Contact</Link>
            </div>
        </section>
    )
}

export default Navbar

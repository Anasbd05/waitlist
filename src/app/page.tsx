import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-black text-white'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default page

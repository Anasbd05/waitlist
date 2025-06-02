import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import {Testimonials} from '@/components/Reviews'
import Tricker from '@/components/Tricker'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tricker />
      <Features />
      <Testimonials />
    </div>
  )
}

export default page

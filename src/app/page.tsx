import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Reviews from '@/components/Reviews'
import Tricker from '@/components/Tricker'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tricker />
      <Features />
      <Reviews />
    </div>
  )
}

export default page

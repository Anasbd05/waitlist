import Examples from '@/components/Examples'
import Faqs from '@/components/Faqs'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import {Reviews} from '@/components/Reviews'
import Show from '@/components/Show'
import Tricker from '@/components/Tricker'
import React from 'react'




const page = async () => {


  return (
    <div>
      <Navbar />
      <Hero />
      <Tricker />
      <Features />
      <Examples />
      <Show />
      <Pricing />
      <Reviews />
      <Faqs />
      <Footer />

    </div>
  )
}

export default page
import Examples from '@/components/Examples'
import Faqs from '@/components/Faqs'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import Reviews from '@/components/Reviews'
import Tricker from '@/components/Tricker'
import {getProducts,getUser} from '@/utils/supabase/queries'
import {createClient} from '@/utils/supabase/server'
import React from 'react'




const page = async () => {

  const supabase = await createClient()

  const [user,products] = await Promise.all([
    getUser(supabase),
    getProducts(supabase)
  ])


  // if(user) {
  //   return redirect('/dashboard')
  // }

  return (
    <div>
      <Navbar />
      <Hero />
      <Tricker />
      <Features />
      <Examples />
      <Reviews />
      <Pricing products={products ?? []} />
      <Faqs />
      <Footer />

    </div>
  )
}

export default page

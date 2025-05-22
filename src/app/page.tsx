"use client"
import {Mail} from 'lucide-react'
import React,{useState} from 'react'
import {supabase} from "@/utils/supabase/createClient"
import {toast} from 'react-toastify'

const Page = () => {
  const [email,setEmail] = useState('')
  const [request,setRequest] = useState('')

  const submitWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    const {error} = await supabase
      .from('waitlist')
      .insert({email,request})

    if(error) {
      toast.error(error.message,{
        position: "bottom-right",
        autoClose: 1000,
        theme: "light",
      })
    } else {
      toast.success("We've added you to the waitlist",{
        position: "bottom-right",
        autoClose: 1000,
        theme: "light",
      })
      setEmail('')
      setRequest('')
    }
  }

  return (
    <section className='w-full items-center bg-black text-white flex flex-col h-screen justify-center'>
      <main className='flex w-full items-center flex-col justify-center'>
        <h2 className='text-3xl font-semibold'>Let AI Design Your Gamer Setup</h2>
        <p className='text-3xl tracking-wider font-bold bg-gradient-to-r bg-clip-text text-transparent from-orange-400 to-purple-700'>
          Join the Waitlist
        </p>
      </main>

      <form onSubmit={submitWaitlist} className='mt-10 flex flex-col gap-4 items-center w-full'>
        <div className="flex w-2/6 items-center px-4 border border-neutral-800 rounded-md">
          <Mail className='text-neutral-400 w-6 h-6' />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder='Email Address'
            className='py-2.5 outline-none w-full text-gray-100 px-4'
          />
        </div>

        <textarea
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          className='flex w-2/6 items-center py-2 h-48 px-4 text-gray-100 border border-neutral-800 outline-none rounded-md'
          placeholder="Features, style, and how much you'd pay — tell us everything!"
        />

        <button type="submit" className='py-2 rounded-lg bg-purple-500 text-white w-2/6 hover:opacity-80 cursor-pointer'>
          Join Waitlist
        </button>
      </form>
    </section>
  )
}

export default Page

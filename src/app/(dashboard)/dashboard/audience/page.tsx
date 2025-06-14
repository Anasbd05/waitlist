import {createClient} from '@/utils/supabase/server'
import Image from 'next/image'
import React from 'react'
import userpic from "@/assets/userpic.png"

const Page = async () => {
    const supabase = await createClient()

    const {data} = await supabase
        .from('audiences')
        .select('*')

    if(!data || data.length === 0) {
        return <p>No audiences found.</p>
    }

    return (
        <section className="mt-5 w-[99%] mx-auto">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-2xl font-semibold mb-6">My Audiences</h1>
            </div>
            <main className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-6 ">
                {data.map((audience) => (
                    <div className='flex gap-3 p-5 items-start border rounded-lg' key={audience.id}>
                        <Image className='rounded-full' alt='' src={userpic} width={50} height={50} />
                        <div className="flex flex-col gap-0.5">
                            <h2 className="font-medium">{audience.name}</h2>
                            <p className='text-muted-foreground text-sm '>{audience.description}</p>
                        </div>
                    </div>
                ))}
            </main>
        </section>
    )
}

export default Page

'use client'

import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import React,{useEffect,useState} from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Button} from '@/components/ui/button'
import {Sizes} from '@/assets/assets'
import {supabase} from '@/utils/supabase/client'

type Audience = {
    id: string
    name: string
}

const Page = () => {
    const [size,setSize] = useState<string>('')
    const [prompt,setPrompt] = useState<string>('')
    const [audiences,setAudiences] = useState<Audience[]>([])
    const [Selectedaudience,setSelectedAudience] = useState<string>('')

    useEffect(() => {
        const fetchAudiences = async () => {
            const {data} = await supabase
                .from('audiences')
                .select('*')
            if(data) setAudiences(data)
        }

        fetchAudiences()
    },[])


    return (
        <section className="mt-5 w-[99%] mx-auto">
            <h1 className='text-3xl mb-6 font-semibold'>Create Ad</h1>
            <main className='flex flex-col w-full items-center gap-y-10'>
                <div className="flex bg-white lg:w-2/4 shadow-sm rounded-lg px-4 pt-8 flex-col gap-6">
                    <div className='flex w-full justify-between gap-4 items-center'>
                        <main className='lg:w-2/4'>
                            <Label className='font-semibold mb-2'>Quantity of ads</Label>
                            <Input placeholder='1' type='number' min={1} max={3} />
                        </main>
                        <main className='lg:w-2/4'>
                            <Label className='font-semibold mb-2'>Aspect Ratio</Label>
                            <Select onValueChange={(val) => setSize(val)}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a size" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Sizes</SelectLabel>
                                        {Sizes.map((item,index) => (
                                            <SelectItem value={item.value} key={index}>
                                                {item.size}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </main>
                    </div>
                    <div>
                        <Label className='font-semibold mb-2'>Target Audience</Label>
                        <Select onValueChange={(val) => setSelectedAudience(val)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select an audience" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Audience</SelectLabel>
                                    {audiences.length === 0 ? (
                                        <p className='py-1.5 pr-8 pl-2 font-medium text-sm'>No Audiences</p>
                                    ) : (
                                        audiences.map((audience,index) => (
                                            <SelectItem key={index} value={audience.name}>
                                                {audience.name}
                                            </SelectItem>
                                        ))
                                    )}
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </div>
                    <div>
                        <Label className='font-semibold mb-2'>Specific requests</Label>
                        <textarea
                            className='h-44 text-sm w-full rounded-md border px-4 py-1'
                            placeholder='I want an ad for a wireless noise-canceling headphone...'
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                    </div>
                    <Button className='cursor-pointer mb-2'>Generate</Button>
                </div>
            </main>
        </section>
    )
}

export default Page

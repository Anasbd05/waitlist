import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import React from 'react'
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
import Image from 'next/image'

import adimage from '@/assets/2.jpg'

const page = () => {
    return (
        <section className='mt-10 w-4/5 mx-auto'>
            <h1 className='text-3xl font-semibold'>Create Ad</h1>
            <main className='flex w-full gap-4 mt-6 '>
                <div className="flex bg-white shadow-sm rounded-lg px-4 pt-8 flex-col  gap-6">
                    <div className='flex w-[370px] gap-4 items-center'>
                        <main className='w-2/4'>
                            <Label className='font-semibold mb-2'>Quantity of ads</Label>
                            <Input placeholder='1' type='number' min={1} max={3} />
                        </main>
                        <main className='w-2/4'>
                            <Label className='font-semibold mb-2'>Aspect_ratio</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Size</SelectLabel>
                                        <SelectItem value="1:1">1:1</SelectItem>
                                        <SelectItem value="2:1">2:1</SelectItem>
                                        <SelectItem value="2:3">2:3</SelectItem>
                                        <SelectItem value="3:2">3:2</SelectItem>
                                        <SelectItem value="4:3">4:3</SelectItem>
                                        <SelectItem value="16:9">16:9</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </main>
                    </div>
                    <div>
                        <Label className='font-semibold mb-2'>Target Audience</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select an audience" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Audience</SelectLabel>
                                    <SelectItem value="Commercial">Commercial</SelectItem>
                                    <SelectItem value="Lowyers">Lowyers</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label className='font-semibold mb-2'>Specific requests</Label>
                        <textarea
                            className='h-44 text-sm  w-full rounded-md border px-4 py-1'
                            placeholder='I want an ad for a wireless noise-canceling headphone. 
                        Highlight its 40-hour battery life, sleek design, and perfect fit for
                         remote workers and travelers. Include a strong hook, 3 key benefits, 
                         and a call-to-action. Tone: modern and persuasive' />
                    </div>
                    <Button className='cursor-pointer'>Generate</Button>
                </div>
                <Image alt='' src={adimage} width={400} height={400} />
            </main>
        </section>
    )
}

export default page

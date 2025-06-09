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

const page = () => {
    return (
        <section className='mt-10 w-full'>
            <h1 className='text-3xl font-semibold'>Create Ad</h1>
            <main className='flex gap-4 mt-6 '>
                <div className="flex bg-gray-50 p-4 flex-col gap-4">
                    <div className='flex w-[370px] gap-4 items-center'>
                        <main className='w-2/4'>
                            <Label className='font-semibold mb-2'>Quantity of ads</Label>
                            <Input type='number' min={1} max={3} />
                        </main>
                        <main className='w-2/4'>
                            <Label className='font-semibold mb-2'>Size</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </main>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default page

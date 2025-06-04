import React from 'react'
import Image from 'next/image'
import logo from "@/assets/logo.ico"
import Link from 'next/link'
import ForgetPass from '@/components/ForgetPass'

const page = () => {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link href="/" className="flex items-center gap-2 font-medium">
                        <div className="bg-black text-primary-foreground flex size-6 items-center justify-center rounded-md">
                            <Image className="w-6 h-6" alt="Logo image" src={logo} />
                        </div>
                        AdsFast
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <ForgetPass />
                    </div>
                </div>
            </div>
            <div className="bg-muted relative hidden lg:block">
                <Image
                    fill
                    src="/placeholder.svg"
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}

export default page

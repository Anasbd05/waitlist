import {redirect} from 'next/navigation';
import React from 'react'
import {createClient} from '@/utils/supabase/server'
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import Image from 'next/image'
import logo from "@/assets/logo.ico"
import Link from 'next/link'

const page = ({
    className,
    searchParams,
    ...props
}: {
    searchParams: {message: string; code: string};
} & React.ComponentProps<"form">) => {
    const newPassword = async (formData: FormData) => {
        'use server';

        const password = formData.get('password') as string;

        if(searchParams.code) {
            const supabase = createClient();
            const {error} = await supabase.auth.exchangeCodeForSession(
                searchParams.code
            );

            if(error) {
                return redirect(
                    `/reset-password?message=Unable to reset Password. Link expired!`
                );
            }

        }
        const supabase = createClient();
        const {error} = await supabase.auth.updateUser({
            password,
        });

        if(error) {
            console.log(error);
            return redirect(
                `/reset-password?message=Unable to reset Password. Try again!`
            );
        }

        redirect(
            `/login?message=Your Password has been reset successfully. Sign in.`
        );
    }
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
                        <form action={newPassword} className={cn("flex flex-col gap-6",className)} {...props}>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-2xl font-bold">New Password</h1>
                                <p className="text-muted-foreground text-sm text-balance">
                                    Enter your new password below
                                </p>
                            </div>
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" name="password" required />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="Confirmpassword">Confirm password</Label>
                                    <Input id="Confirmpassword" type="password" name="Confirmpassword" required />
                                </div>
                                <Button type="submit" className="w-full cursor-pointer">
                                    Submit
                                </Button>
                            </div>
                        </form>
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

import {createClient} from '@/utils/supabase/server'
import {headers} from 'next/headers'
import React from 'react'
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
const ForgetPass = ({
    className,
    ...props
}: React.ComponentProps<"form">) => {

    const resetPassword = async (formData: FormData) => {
        "use server"

        const origin = (await headers()).get("origin")

        const email = formData.get('email') as string
        const supabase = createClient()

        const {error,data} =
            await supabase.auth.resetPasswordForEmail(email,{redirectTo: `${origin}/reset-password`})
        if(error) {
            console.log(error)
        } else {
            console.log(data)
        }
    }
    return (
        <form action={resetPassword} className={cn("flex flex-col gap-6",className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Forget Password</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to send you link to reset your password
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" name="email" placeholder="m@example.com" required />
                </div>
                <Button type="submit" className="w-full cursor-pointer">
                    Submit
                </Button>
            </div>
        </form>
    )
}

export default ForgetPass

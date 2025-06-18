"use client"

import {supabase} from '@/utils/supabase/client'
import {useRouter} from 'next/navigation'
import React,{useState} from 'react'
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {LoaderIcon} from 'lucide-react'

const ForgetPass = ({
    className,
    searchParams,
    ...props
}: {
    searchParams: {message?: string; error?: string};

} & React.ComponentProps<"form">) => {

    const [loading,setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;

        try {
            const {error} = await supabase.auth.resetPasswordForEmail(email,{
                redirectTo: `${window.location.origin}/reset-password`
            });

            if(error) {
                router.push(`/forget-password?error=${encodeURIComponent(error.message)}`);
            } else {
                router.push(`/forget-password?message=${encodeURIComponent('Password reset email sent successfully. Please check your inbox.')}`);
            }
        } catch(err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6",className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Forgot Password</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to send you a password reset link.
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                </div>
                <Button
                    type="submit"
                    className={`w-full cursor-pointer ${loading && "opacity-80"} `}
                    disabled={loading}>
                    {loading ? (<span className="flex items-center gap-2"><LoaderIcon className="animate-spin h-5 w-5" />Submiting</span>) : "Submit"}
                </Button>
                {searchParams?.message && (
                    <p className="text-green-600 text-sm text-center mt-2">
                        {searchParams.message}
                    </p>
                )}

                {searchParams?.error && (
                    <p className="text-red-600 text-sm text-center mt-2">
                        {searchParams.error}
                    </p>
                )}

            </div>
        </form>
    )
}

export default ForgetPass

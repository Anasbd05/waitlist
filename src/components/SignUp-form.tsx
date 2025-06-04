import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import Link from "next/link"
import {headers} from "next/headers"
import {createClient} from "@/utils/supabase/server"
import {redirect} from "next/navigation"

export async function SignupForm({
    className,
    ...props
}: React.ComponentProps<"form">) {

    const supabase = createClient()
    const {data: {session}} = await supabase.auth.getSession()

    if(session) {
        redirect('/dashboard')
    }

    const signUp = async (formData: FormData) => {
        "use server"

        const origin = (await headers()).get("origin")

        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const confirmpassword = formData.get('confirmpassword') as string

        if(password !== confirmpassword) {
            alert("Passwords don't match")
        }

        const supabase = createClient()
        const {error} = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${origin}/dashboard`
            }
        })
        if(error) {
            console.log(error.message)
        } else {
            console.log('check your email for confirmation')
        }
    }

    return (
        <form action={signUp} className={cn("flex flex-col gap-6",className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create an account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to Sign up
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" name="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="Confirmpassword">Confirm password</Label>
                    <Input id="Confirmpassword" name="confirmpassword" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                    Sign up
                </Button>
            </div>
            <div className="text-center text-sm">
                have an account?{" "}
                <Link href="/login" className="underline underline-offset-4">
                    Login
                </Link>
            </div>
        </form>
    )
}

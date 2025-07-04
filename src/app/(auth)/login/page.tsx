import {LoginForm} from "@/components/login-form"
import logo from "@/assets/logo.ico"
import Image from "next/image"
import Link from "next/link"
import {createClient} from "@/utils/supabase/server"
import {redirect} from "next/navigation"
import loginImage from "@/assets/login.png"

export default async function LoginPage() {

    const supabase = await createClient()

    const {data: {user}} = await supabase.auth.getUser()

    if(user) {
        redirect('/dashboard')
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
                        <LoginForm />
                    </div>
                </div>
            </div>
            <div className="bg-primary rounded-l-2xl relative hidden lg:block">
                <Image
                    draggable="false"
                    loading="lazy"
                    fill
                    src={loginImage}
                    alt="Login image"
                    className="absolute p-2 rounded-2xl inset-0 h-full w-full"
                />
            </div>
        </div>
    )
}

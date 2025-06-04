import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import Link from "next/link"
import {redirect} from "next/navigation"
import {createClient} from "@/utils/supabase/server"
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {






  const login = async (formData: FormData) => {
    "use server"

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const supabase = createClient()

    const {error} = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if(error) {
      console.log(error)
    } else {
      redirect('/dashboard')
    }
  }


  return (
    <form action={login} className={cn("flex flex-col gap-6",className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forget-password"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input id="password" name="password" type="password" required />
        </div>
        <Button type="submit" className="w-full cursor-pointer">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </form>
  )
}

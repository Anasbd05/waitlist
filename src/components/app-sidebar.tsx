import * as React from "react"
import {NavMain} from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import {NavUser} from "./nav-user"
import {createClient} from "@/utils/supabase/server"
import logo from "@/assets/logo.ico"
import Image from "next/image"
// This is sample data.



export async function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const supabase = createClient()
  const {data: {user}} = await supabase.auth.getUser()

  const email = user?.email;
  if(!email) {
    console.warn('User is not authenticated');
    return null;
  }

  const {data,error} = await supabase
    .from('users')
    .select('*')
    .eq('email',email)
    .single();

  if(error) {
    console.error('Error retrieving user from Supabase!',error);
  }

  const currentPlan = data?.plan_name ?? "free";

  const userr = {
    name: user?.user_metadata.name,
    email: user?.email ?? "",
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <Image src={logo} alt="logo image" className="h-6 w-6" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">AdsFast</span>
            <span className="truncate text-xs">
              {currentPlan}
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userr} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

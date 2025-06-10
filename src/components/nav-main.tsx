"use client"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {Images,PlusCircle,Users} from "lucide-react"

export function NavMain() {

  const pathname = usePathname()

  const items = [
    {
      title: "My Ads",
      url: "/dashboard",
      icon: Images
    },
    {
      title: "Create an Ad",
      url: "/dashboard/generate-ads",
      icon: PlusCircle
    },
    {
      title: "Audience",
      url: "/dashboard/audience",
      icon: Users
    },
  ]


  return (
    <SidebarGroup className="mt-5">
      <SidebarMenu className="flex flex-col gap-1">        {items.map((item) => (
        <Link href={item.url} key={item.title} className={`rounded-none ${pathname === item.url ? "text-purple-500 bg-gray-100 font-medium" : "text-muted-foreground"} `}>
          < SidebarMenuItem >
            <SidebarMenuButton tooltip={item.title}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </Link>
      ))
      }
      </SidebarMenu >
    </SidebarGroup >
  )
}
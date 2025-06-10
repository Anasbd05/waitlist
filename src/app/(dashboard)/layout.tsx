import {SidebarInset,SidebarProvider,SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import Link from "next/link";
import {PlusCircle} from "lucide-react";


export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <div className="w-full justify-between relative flex bg-white items-center gap-2 my-4 px-4">
                    <SidebarTrigger className="" />
                    <Link href={"/dashboard/generate-ads"} className="-top-0.5 right-6 absolute">
                        <button className="py-1.5 w-full flex hover:bg-purple-100 cursor-pointer justify-center mb-3 px-4 rounded-lg  items-center gap-2 font-medium text-purple-500 bg-purple-50 ">
                            <PlusCircle className="text-purple-500 h-5 w-5" />
                            Create an Ad
                        </button>
                    </Link>
                </div>
                <main className="flex flex-1 bg-gray-50 flex-col gap-4 p-4 pt-0 ">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
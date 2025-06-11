import {SidebarInset,SidebarProvider,SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import {LayoutClient} from "@/constant/LayoutClient";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <div className="w-full justify-between relative flex bg-white items-center gap-2 my-4 px-4">
                    <SidebarTrigger className="" />
                    <LayoutClient />
                </div>
                <main className="flex flex-1 bg-gray-50 flex-col gap-4 p-4 pt-0">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}

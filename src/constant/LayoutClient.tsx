"use client";

import {usePathname} from "next/navigation";
import {AddAudience} from "@/constant/AddAudience";
import Link from "next/link";
import {PlusCircle} from "lucide-react";

export function LayoutClient() {
    const pathname = usePathname();

    if(pathname === "/dashboard/audience") {
        return <AddAudience />;
    }

    return (
        <Link href={"/dashboard/generate-ads"} className="-top-0.5 right-6 absolute">
            <button className="py-1.5 w-full flex hover:bg-purple-100 cursor-pointer justify-center mb-3 px-4 rounded-lg items-center gap-2 font-medium text-purple-500 bg-purple-50">
                <PlusCircle className="text-purple-500 h-5 w-5" />
                Create an Ad
            </button>
        </Link>
    );
}

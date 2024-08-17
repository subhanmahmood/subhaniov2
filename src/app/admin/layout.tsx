import AdminSidebar from "@/components/admin/sidebar";
import { type ReactNode } from "react";

export default async function LinkLayout({ children }: { children: ReactNode }) {
    return <div className="p-4 grid grid-cols-[1fr_3fr] gap-8 max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold px-4">Admin</h1>
            <div className="flex flex-col gap-1">
                <AdminSidebar />
            </div>
        </div>
        {children}
    </div>
}
import { auth } from "@/auth";
import AdminSidebar from "@/components/admin/sidebar";
import { SignOutButton } from "@/components/auth/auth-buttons";
import { UnauthorizedError } from "@/lib/exception";
import { type ReactNode } from "react";

export default async function AdminLayout({ children }: { children: ReactNode }) {
    const session = await auth()

    if (!session) {
        throw new UnauthorizedError()
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
                <aside className="md:sticky md:top-4 md:h-[calc(100vh-2rem)]">
                    <h1 className="text-lg font-semibold mb-4">Admin</h1>
                    <AdminSidebar />
                    <div className="mt-4">
                        <SignOutButton className="w-full" />
                    </div>
                </aside>
                <main>{children}</main>
            </div>
        </div>
    );
}
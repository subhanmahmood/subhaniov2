import { type ReactNode } from "react";

export default async function LinkLayout({ children }: { children: ReactNode }) {
    return <div className="p-4 flex flex-col gap-3 max-w-md mx-auto">{children}</div>
}
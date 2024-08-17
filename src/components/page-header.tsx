import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const PageHeader = ({ title, showBack = true }: { title: string, showBack?: boolean }) => {
    return (
        <div className="flex gap-4 items-center">
            {showBack && <Link href="/links" prefetch={true}><ArrowLeft size={20} /></Link>}
            <h1 className="text-lg font-semibold">{title}</h1>
        </div>
    )
}
import { ArrowLeft } from "lucide-react"
import BackButton from "./back-button"

export const PageHeader = ({ title, showBack = true }: { title: string, showBack?: boolean }) => {
    return (
        <div className="flex gap-4 items-center">
            {showBack && <BackButton className="cursor-pointer"><ArrowLeft  size={20} /></BackButton>}
            <h1 className="text-lg font-semibold">{title}</h1>
        </div>
    )
}
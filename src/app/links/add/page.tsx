import LinkForm from "@/components/link/link-form";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


export default async function AddLinks() {
    return <>
        <div className="flex gap-4 items-center">
            <Link href="/links"><ArrowLeft size={20} /></Link>
            <h1 className="text-lg font-semibold">Add Link</h1>
        </div>

        <LinkForm />
    </>
}
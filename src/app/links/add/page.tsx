import LinkForm from "@/components/link/link-form";
import { supabase } from "@/server/db";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function AddLinks() {

    const { data, error } = await supabase.auth.getUser()
    if (error ?? !data?.user) {
        redirect('/login')
    }
    return <>
        <div className="flex gap-4 items-center">
            <Link href="/links"><ArrowLeft size={20} /></Link>
            <h1 className="text-lg font-semibold">Add Link</h1>
        </div>

        <LinkForm />
    </>
}
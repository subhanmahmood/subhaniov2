import LinkForm from "@/components/link/link-form";
import { createClient } from "@/lib/utils/supabase/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function EditLink({ params }: { params: { id: string } }) {
    const isEditing = !!params.id;

    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error ?? !data?.user) {
        redirect('/login')
    }

    return <>
        <div className="flex gap-4 items-center">
            <Link href="/links"><ArrowLeft size={20} /></Link>
            <h1 className="text-lg font-semibold">{`${isEditing ? 'Edit' : 'Save'} Link`}</h1>
        </div>

        <LinkForm id={params.id} />
    </>
}
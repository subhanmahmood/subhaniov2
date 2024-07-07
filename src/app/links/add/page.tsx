import { auth } from "@/auth";
import LinkForm from "@/components/link/link-form";
import { getLinksAction } from "@/server/actions/link.actions";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SandboxPreview } from "./loading";
import { getCategoriesAction } from "@/server/actions/category.actions";


export default async function AddLinks() {
    const session = await auth();

    if (!session) {
        redirect('/login')
    }

    const [categoriesActionResult, error] = await getCategoriesAction({ withLinks: false })

    return <>
        <div className="flex gap-2">

            <div className="flex grow flex-col gap-2">

                <div className="flex gap-4 items-center">
                    <Link prefetch={true} href="/links"><ArrowLeft size={20} /></Link>
                    <h1 className="text-lg font-semibold">Add Link</h1>
                </div>

                <LinkForm categories={categoriesActionResult?.categories} />

            </div>
        </div>

    </>
}
import { auth } from "@/auth";
import LinksPage from "../shared";
import { getCategoriesWithLinksAction } from "@/server/actions/category.actions";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/auth/auth-buttons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Edit, Plus } from "lucide-react";

export default async function LinksTT() {
    const session = await auth()
    const [categoriesWithLinks] = await getCategoriesWithLinksAction({})

    if (!categoriesWithLinks) {
        redirect('/links')
    }

    return <>
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Hi, I&apos;m Subhan</h1>
            <div className="flex gap-2 items-center">
                {session &&
                    <>
                        <Link prefetch={true} href="/admin/links"><Button variant={'outline'}>Admin</Button></Link>
                        <SignOutButton />
                    </>
                }
            </div>
        </div>
        <h1 className="text-md text-slate-600">I make videos on the internet sometimes and build projects sometimes. You&apos;re probably looking for something you saw in one of my videos or on my website. Hopefully you find it below.</h1>
        {session &&
            <div className='flex gap-2 w-full'>
                <Link prefetch={true} href="/admin/links/add" className="w-1/2"><Button className="flex items-center gap-2 w-full" variant={'outline'}><Plus className="w-4 h-4" /> Add Link</Button></Link>
                <Link prefetch={true} href="/admin/categories/edit" className="w-1/2"><Button className="flex items-center gap-2 w-full" variant={'outline'}><Edit className="w-4 h-4" /> Edit Categories</Button></Link>
            </div>
        }
        <LinksPage platform="tiktok" session={session} categoriesWithLinks={categoriesWithLinks} />
    </>
}



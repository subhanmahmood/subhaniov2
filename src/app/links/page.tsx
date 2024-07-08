import { auth } from "@/auth";
import { SignOutButton } from "@/components/auth/auth-buttons";
import LinkListItem from "@/components/link/link-item";
import { Button } from "@/components/ui/button";
import { getCategoriesWithLinksAction } from "@/server/actions/category.actions";
import { Edit, Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Links() {

    const session = await auth()

    const [categoriesWithLinks] = await getCategoriesWithLinksAction({});

    if (!categoriesWithLinks) {
        redirect('/links');
    }

    return <>
        <div className="flex justify-between">
            <h1 className="text-lg font-semibold">Hi, I&apos;m Subhan</h1>
            {session && <SignOutButton />}
        </div>
        <h1 className="text-md text-slate-600">I make videos on the internet sometimes and build projects sometimes. You&apos;re probably looking for something you saw in one of my videos or on my website. Hopefully you find it below.</h1>
        {session &&
            <div className='flex gap-2 w-full'>
                <Button className="w-1/2" variant={'outline'}><Link prefetch={true} href="/links/add" className="flex items-center gap-2"><Plus className="w-4 h-4" /> Add Link</Link></Button>
                <Button className="w-1/2" variant={'outline'}><Link prefetch={true} href="/categories/edit" className="flex items-center gap-2"><Edit className="w-4 h-4" /> Edit Categories</Link></Button>
            </div>
        }
        {categoriesWithLinks.map(linkGroup => {
            return (
                <div key={linkGroup.id}>
                    <div className="text-lg flex justify-between items-center">
                        <p>{linkGroup.name}</p>
                        {session &&
                            <Button className="px-2" variant={'ghost'}>
                                <Link prefetch={true} href={`/categories/edit/${linkGroup.id}`}><Edit className="w-4 h-4" /></Link>
                            </Button>
                        }
                    </div>
                    <ul className="list-disc pl-6 text-slate-60">
                        {linkGroup.links.map(link => {
                            return <LinkListItem key={link.id} name={link.name} url={link.url} id={link.id} session={session} />
                        })}
                    </ul>
                </div>
            )
        })}
    </>
}
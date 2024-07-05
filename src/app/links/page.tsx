import { auth } from "@/auth";
import { SignOutButton } from "@/components/auth/auth-buttons";
import LinkItem from "@/components/link/link-item";
import { getCategoriesWithLinksAction } from "@/server/actions/category.actions";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Links() {

    const session = await auth()

    const [categoriesWithLinks, error] = await getCategoriesWithLinksAction({});

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
            <div className='flex gap-1'>
                <Link href="/links/add" className="flex">(<p className="text-gray-500 hover:text-gray-900 transition-colors duration-200 underline">Add</p>)</Link>
                <Link href="/categories/edit" className="flex">(<p className="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors duration-200 underline">Edit Category Order</p>)</Link>
            </div>
        }
        {categoriesWithLinks.map(linkGroup => {
            return (
                <div key={linkGroup.id}>
                    <p className="text-lg">{linkGroup.name}&nbsp;{session && (<Link href={`/categories/edit/${linkGroup.id}`} className="text-gray-500 hover:text-gray-900 transition-colors duration-200 underline">Edit</Link>)}</p>
                    <ul className="list-disc pl-6 text-slate-60">
                        {linkGroup.links.map(link => {
                            return <LinkItem key={link.id} name={link.name} url={link.url} id={link.id} session={session} />
                        })}
                    </ul>
                </div>
            )
        })}
    </>
}
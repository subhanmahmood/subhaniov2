import LinkItem from "@/components/link/link-item";
import { db } from "@/server/db"
import { Link as DBLink } from "@prisma/client";
import Link from "next/link";

export default async function Links() {
    const links = await db.link.findMany()

    const categorizedLinks = links.reduce((acc, link) => {
        const category = link.category || 'Other';
        acc[category] = [...(acc[category] || []), link];
        return acc;
    }, {} as Record<string, DBLink[]>);

    return <>
        <div className="flex justify-between">
            <h1 className="text-lg font-semibold">Hi, I'm Subhan</h1>
            {/* {session ?
                <Link href="/api/auth/signout" className="text-gray-500 hover:text-gray-900 transition-colors duration-200 underline">Sign out</Link>
                :
                <Link href="/api/auth/signin" className="text-gray-500 hover:text-gray-900 transition-colors duration-200 underline">Sign in</Link>
            } */}
        </div>
        <h1 className="text-md text-slate-600">I make videos on the internet sometimes and build projects sometimes. You're probably looking for something you saw in one of my videos or on my website.</h1>
     <div className='flex gap-4'>
            <Link href="/links/add" className="flex">(<p className="text-gray-500 hover:text-gray-900 transition-colors duration-200 underline">Add</p>)</Link>
        </div>
        {Object.keys(categorizedLinks).map(category => {
            return (
                <>
                    <p className="text-lg">{category}</p>
                    <ul className="list-disc pl-6 text-slate-600">
                        {categorizedLinks[category]?.map(link => {
                            return <LinkItem name={link.name} url={link.url} id={link.id} category={link.category} />
                        })}
                    </ul>
                </>
            )
        })}
    </>
}
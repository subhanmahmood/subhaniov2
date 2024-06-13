import LinkItem from "@/components/link/link-item";
import { createClient } from "@/lib/utils/supabase/server";
import { logout } from "@/server/actions/login";
import { db } from "@/server/db"
import { type Link as DBLink } from "@prisma/client";
import Link from "next/link";

const LogoutButton = () => {
    return <form action={logout}>
        <button className="text-gray-500 hover:text-gray-900 transition-colors duration-200 underline" type="submit">Logout</button>
    </form>
}

export default async function Links() {
    const links = await db.link.findMany()

    const categorizedLinks = links.reduce((acc, link) => {
        const category = link.category || 'Other';
        acc[category] = [...(acc[category] ?? []), link];
        return acc;
    }, {} as Record<string, DBLink[]>);

    const supabase = createClient()

    const { data: { user } } = await supabase.auth.getUser();

    return <>
        <div className="flex justify-between">
            <h1 className="text-lg font-semibold">Hi, I&apos;m Subhan</h1>
            {user &&
                <LogoutButton />
            }
        </div>
        <h1 className="text-md text-slate-600">I make videos on the internet sometimes and build projects sometimes. You&apos;re probably looking for something you saw in one of my videos or on my website.</h1>
        {user &&
            <div className='flex gap-4'>
                <Link href="/links/add" className="flex">(<p className="text-gray-500 hover:text-gray-900 transition-colors duration-200 underline">Add</p>)</Link>
            </div>
        }
        {Object.keys(categorizedLinks).map(category => {
            return (
                <div key={category}>
                    <p className="text-lg">{category}</p>
                    <ul className="list-disc pl-6 text-slate-60">
                        {categorizedLinks[category]?.map(link => {
                            return <LinkItem key={link.id} name={link.name} url={link.url} id={link.id} category={link.category} user={user} />
                        })}
                    </ul>
                </div>
            )
        })}
    </>
}
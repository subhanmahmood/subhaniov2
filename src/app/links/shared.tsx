import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Edit } from "lucide-react"
import LinkListItem from "@/components/link/link-item"
import { type Session } from "next-auth"

export type Platform = 'default' | 'instagram' | 'tiktok'

export default function LinksPage({ platform, session, categoriesWithLinks }: { platform: Platform, session: Session | null, categoriesWithLinks: Array<{ id: string, name: string, order: number, links: Array<{ id: string, name: string, url: string, instagramUrl?: string | null, tiktokUrl?: string | null, order: number, categoryId: string }> }> }) {
    return <>
        {categoriesWithLinks.map(linkGroup => {
            return (
                <div key={linkGroup.id}>
                    <div className="text-lg flex justify-between items-center">
                        <p>{linkGroup.name}</p>
                        {session &&
                            <Button className="px-2" variant={'ghost'}>
                                <Link prefetch={true} href={`/admin/categories/edit/${linkGroup.id}`}><Edit className="w-4 h-4" /></Link>
                            </Button>
                        }
                    </div>
                    <ul className="list-disc pl-6 text-slate-60">
                        {linkGroup.links.map(link => {
                            const finalUrl = platform === 'instagram' ? (link.instagramUrl ?? link.url)
                                : platform === 'tiktok' ? (link.tiktokUrl ?? link.url)
                                    : link.url
                            return <LinkListItem key={link.id} name={link.name} url={finalUrl} id={link.id} session={session} />
                        })}
                    </ul>
                </div>
            )
        })}
    </>
}



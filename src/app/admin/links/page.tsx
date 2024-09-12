

import { PageHeader } from '@/components/page-header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Edit, Plus } from 'lucide-react';
import { getCategoriesWithLinksAction } from '@/server/actions/category.actions';
import { redirect } from 'next/navigation';
import LinkListItem from '@/components/link/link-item';
import { auth } from '@/auth';

export default async function EditCategory() {

    const session = await auth()

    const [categoriesWithLinks] = await getCategoriesWithLinksAction({});

    if (!categoriesWithLinks) {
        redirect('/links');
    }

    return <div>
        <div className="flex justify-between items-center">
            <PageHeader showBack={false} title="Links" />
            <div className="flex gap-2">
                <Link href="/admin/links/add"><Button variant="outline" className="pl-2 pr-1 py-1 h-auto">Add<Plus className="ml-1 w-4 h-4" /></Button></Link>
            </div>
        </div>
        <div className="flex flex-col gap-6 mt-4">
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
                                return <LinkListItem key={link.id} name={link.name} url={link.url} id={link.id} session={session} />
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    </div>
}
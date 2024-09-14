import { getPostTypesAction } from '@/server/actions/post-type.actions';
import { PageHeader } from '@/components/page-header';
import PostTypeCard from '@/components/admin/post-types/post-type-card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, Plus } from 'lucide-react';

export const dynamic = 'force-dynamic'

export default async function EditCategory() {
    const [postTypes, error] = await getPostTypesAction({});

    if (error) {
        throw new Error("Could not fetch post types")
    }

    return <div>
        <div className="flex justify-between items-center">
            <PageHeader title="Post Types" showBack={false} />
            <div className="flex gap-2">
                <Link href="/admin/post-types/add"><Button variant="outline" className="pl-2 pr-1 py-1 h-auto">Add<Plus className="ml-1 w-4 h-4" /></Button></Link>
                <Link href="/admin/post-types/reorder"><Button variant="outline" className="pl-2 pr-1 py-1 h-auto">Reorder<ArrowUpDown className="ml-1 w-4 h-4" /></Button></Link>
            </div>
        </div>
        <div className="flex flex-col gap-6 mt-4">
            {
                postTypes ? postTypes.map((postType) => (
                    <PostTypeCard
                        key={postType.id}
                        id={postType.id ?? ''}
                        name={postType.name}
                        price={postType.price}
                        active={postType.active ?? false}
                        staticId={postType.staticId ?? ''}
                        postType="post"
                    />
                )) : 'No post types yet'
            }
        </div>
    </div>
}
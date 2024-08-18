import { auth } from '@/auth';
import { UnauthorizedError } from '@/lib/exception';
import { getPostTypesAction } from '@/server/actions/post-type.actions';
import { PageHeader } from '@/components/page-header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import PostOrPromoTypeSortable from '@/components/admin/post-or-promo-type-sortable';

type PostOrPromo = {
    id: string;
    name: string;
    price: number;
    active: boolean;
    order: number;
}

export default async function EditCategory() {

    const session = await auth()

    if (!session) {
        throw new UnauthorizedError()
    }

    const [postTypes] = await getPostTypesAction();
    const validPostTypes = postTypes?.filter((pt): pt is PostOrPromo =>
        pt.id !== undefined && pt.active !== undefined && pt.order !== undefined
    ) ?? [];

    return <div>
        <div className="flex justify-between items-center">
            <PageHeader title="Post Types" showBack={false} />
            <div className="flex gap-2">
                <Link href="/admin/post-types/add"><Button variant="outline" className="pl-2 pr-1 py-1 h-auto">Add<Plus className="ml-1 w-4 h-4" /></Button></Link>
            </div>
        </div>
        <PostOrPromoTypeSortable dbItems={validPostTypes} postType="post" successUrl="/admin/post-types" />
    </div>
}
import { auth } from '@/auth';
import { UnauthorizedError } from '@/lib/exception';
import { getPromotionTypesAction } from '@/server/actions/promo-type.actions';
import { PageHeader } from '@/components/page-header';
import PostTypeCard from '@/components/admin/post-types/post-type-card';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, Plus } from 'lucide-react';
import Link from 'next/link';

export default async function EditCategory() {

    const session = await auth()

    if (!session) {
        throw new UnauthorizedError()
    }
 
    const [promoTypes] = await getPromotionTypesAction();

    return <div>
        <div className="flex justify-between items-center">
            <PageHeader title="Promo Types" showBack={false} />
            <div className="flex gap-2">
                <Link href="/admin/promo-types/add"><Button variant="outline" className="pl-2 pr-1 py-1 h-auto">Add<Plus className="ml-1 w-4 h-4" /></Button></Link>
                <Link href="/admin/promo-types/reorder"><Button variant="outline" className="pl-2 pr-1 py-1 h-auto">Reorder<ArrowUpDown className="ml-1 w-4 h-4" /></Button></Link>
            </div>
        </div>
        
        <div className="flex flex-col gap-6 mt-4">
        {
            promoTypes ? promoTypes.map((promoType) => (
                <PostTypeCard 
                    key={promoType.id} 
                    id={promoType.id ?? ''}
                    name={promoType.name}
                    price={promoType.price}
                    active={promoType.active ?? false}  
                    postType="promo"
                />
            )) : 'No post types yet'
        }
        </div>
    </div>
}
import { auth } from '@/auth';
import { UnauthorizedError } from '@/lib/exception';
import { getPostTypesAction } from '@/server/actions/post-type.actions';
import { PageHeader } from '@/components/page-header';
import Link from 'next/link';

export default async function EditCategory() {

    const session = await auth()

    if (!session) {
        throw new UnauthorizedError()
    }

    const [postTypes] = await getPostTypesAction();

    return <div>
        <PageHeader title="Post Types" showBack={false} />
        {
            postTypes ? postTypes.map((postType) => (
                <div key={postType.id}>
                    <h2>Post Type:&nbsp;{postType.name}</h2>
                    <p>Price:&nbsp;{postType.price}</p>
                    <Link href={`/admin/post-types/edit/${postType.id}`}>Edit</Link>
                </div>
            )) : 'No post types yet'}
    </div>
}
import { PageHeaderSkeleton } from "../common/page-header-skeleton"
import { Skeleton } from "../skeleton"

export const EditCategoryItemSkeleton = () => {
    return <div className="flex items-center justify-between pl-1 py-3">
        <div className="flex gap-2">
            <Skeleton className="w-[10px]" height="h-[24px]" />
            <Skeleton className="w-[96px] ml-[22px]" />
        </div>
        <div className="flex gap-2">
            <Skeleton className="w-[48px]" height="h-[40px]" />
            <Skeleton className="w-[48px]" height="h-[40px]" />
        </div>
    </div>
}

export const EditCategoryFormSkeleton = () => {
    return <>
        <PageHeaderSkeleton />
        <EditCategoryItemSkeleton />
        <EditCategoryItemSkeleton />
        <Skeleton className="mt-2 w-full max-w-full" height="h-[40px]" />
    </>
}
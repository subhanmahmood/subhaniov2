import { InputSkeleton } from "../common/form"
import { PageHeaderSkeleton } from "../common/page-header-skeleton"
import { Skeleton } from "../skeleton"

export const LinkFormSkeleton = () => {
    return (
        <div className="w-full">
            <PageHeaderSkeleton />
            <div className="flex flex-col gap-2 mt-2">
                <InputSkeleton labelWidth="74" placeholderWidth="74" />
                <InputSkeleton labelWidth="48" placeholderWidth="48" />
                <InputSkeleton labelWidth="96" placeholderWidth="96" />
            </div>
            <div className="inline-flex items-center justify-center transition-colors px-4 w-full">
                <Skeleton className="w-[24px] max-w-full" />
            </div>
            <div className="flex h-10 w-full border border-input rounded-md px-3 py-2 file:border-0">
                <Skeleton className="w-[124px] max-w-full" />
            </div>
            <Skeleton className="w-[256px] mt-2 max-w-full" />
            <Skeleton className="mt-2 w-full max-w-full" height="h-[40px]" />
        </div>
    )
}
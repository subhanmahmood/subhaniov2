import { Skeleton } from "../skeleton"

export const PageHeaderSkeleton = () => {
    return (
        <div className="leading-none flex items-center gap-4">
            <Skeleton className="w-[32px] max-w-full" height="h-[28px]" />
            <Skeleton className="w-[120px] max-w-full" height="h-[28px]" />
        </div>
    )
}
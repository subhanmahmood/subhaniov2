import { Skeleton } from "../skeleton"

export const InputSkeleton = ({ labelWidth, placeholderWidth }: { labelWidth: string, placeholderWidth: string }) => {
    return <div className="flex flex-col gap-2">
        <Skeleton className={`w-[${labelWidth}px] max-w-full`} />
        <div className="flex h-10 w-full border border-input rounded-md px-3 py-2 file:border-0">
            <Skeleton className={`w-[${placeholderWidth}px] max-w-full`} />
        </div>
    </div>
}
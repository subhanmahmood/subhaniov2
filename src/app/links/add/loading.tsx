import { Skeleton, SVGSkeleton } from "@/components/skeleton";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <>
        <form className="w-full">
            <label className="leading-none flex items-center gap-4">
                <Skeleton className="w-[32px] max-w-full" height="h-[28px]" />
                <Skeleton className="w-[120px] max-w-full" height="h-[28px]" />
            </label>
            <div className="flex flex-col gap-2 mt-2">
                <Skeleton className="w-[74px] max-w-full" />
                <div className="flex h-10 w-full border border-input rounded-md px-3 py-2 file:border-0">
                    <Skeleton className="w-[74px] max-w-full" />
                </div>
            </div>
            <div className="flex flex-col gap-1 pt-1">
                <Skeleton className="w-[48px] max-w-full" />
                <div className="flex h-10 w-full border border-input rounded-md px-3 py-2 file:border-0">
                    <Skeleton className="w-[48px] max-w-full" />
                </div>
            </div>
            <div className="flex flex-col gap-1 pt-1">
                <Skeleton className="w-[96px] max-w-full" />
                <div className="flex h-10 w-full border border-input rounded-md px-3 py-2 file:border-0">
                    <Skeleton className="w-[96px] max-w-full" />
                </div>
            </div>
            <div className="inline-flex items-center justify-center transition-colors px-4 w-full">
                <Skeleton className="w-[24px] max-w-full" />
            </div>
            <div className="flex h-10 w-full border border-input rounded-md px-3 py-2 file:border-0">
                <Skeleton className="w-[124px] max-w-full" />
            </div>
            <Skeleton className="w-[256px] mt-2 max-w-full" />
            <Skeleton className="mt-2 w-full max-w-full" height="h-[40px]" />

        </form>
    </>
}

export const SandboxPreview = () => (
    <Loading />
);


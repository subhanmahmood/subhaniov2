import clsx from "clsx"

const Skeleton = ({ className, height }: { className: string, height?: string }) => (
    <span aria-live="polite" aria-busy="true" className={clsx(className, "inline-flex animate-pulse select-none rounded-md bg-gray-300 leading-none", height)}>
        ‌
    </span>
)

const SVGSkeleton = ({ className }: { className: string }) => (
    <svg
        className={
            className + " animate-pulse rounded bg-gray-300"
        }
    />
)

export { Skeleton, SVGSkeleton }
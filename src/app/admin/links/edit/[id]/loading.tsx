import { LinkFormSkeleton } from "@/components/skeleton/links/link-form-skeleton";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <LinkFormSkeleton />
}

export const SandboxPreview = () => (
    <Loading />
);


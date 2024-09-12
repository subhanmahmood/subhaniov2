'use client' // Error components must be Client Components

import { FrownIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
    error,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.log(error)
        console.log(error.name)
        console.log(error.message)
    }, [error])

    return (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
                <FrownIcon className="mx-auto h-12 w-12 text-primary" />
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{error.name ?? 'Oops, something went wrong!'}</h1>
                <p className="mt-4 text-muted-foreground">
                    {error.message ?? 'The page you\'re looking for doesn\'t seem to exist. Don\'t worry, we\'ll help you find your way.'}
                </p>
                <div className="mt-6 flex gap-2 items-center justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        prefetch={false}
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}

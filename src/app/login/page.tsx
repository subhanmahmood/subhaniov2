import { env } from '@/env'
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { signIn, providerMap } from "@/auth";
import { GithubIcon } from 'lucide-react';



export default function LoginPage({
    searchParams,
}: {
    params: { slug: string };
    searchParams?: Record<string, string | string[] | undefined>;
}) {
    const accessKey = searchParams?.accessKey

    if (accessKey !== env.AUTH_ACCESS_KEY) {
        redirect('/')
    }

    return (
        <div className="flex flex-col justify-center items-center gap-2 h-screen">
            {Object.values(providerMap).map((provider) => (
                <form
                    key={provider.id}
                    action={async () => {
                        "use server"
                        try {
                            await signIn(provider.id)
                        } catch (error) {
                            // Signin can fail for a number of reasons, such as the user
                            // not existing, or the user not having the correct role.
                            // In some cases, you may want to redirect to a custom error
                            // if (error instanceof AuthError) {
                            //     return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
                            // }

                            // Otherwise if a redirects happens NextJS can handle it
                            // so you can just re-thrown the error and let NextJS handle it.
                            // Docs:
                            // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                            throw error
                        }
                    }}
                >
                    <Button type="submit">
                        <GithubIcon className="w-4 h-4 mr-2" /> <span>Sign in with {provider.name}</span>
                    </Button>
                </form>
            ))}
        </div>
    )
}

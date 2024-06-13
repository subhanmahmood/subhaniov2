import { env } from '@/env'
import { login, signup } from '@/server/actions/login'
import { Label } from '@/components/ui/label';
import { redirect } from 'next/navigation';         
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
        <form className="flex flex-col justify-center gap-2 h-screen">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
            <Button formAction={login}>Log in</Button>
            {env.AUTH_ACCESS_KEY && <Button variant={'outline'} formAction={signup}>Sign up</Button>}
        </form>
    )
}

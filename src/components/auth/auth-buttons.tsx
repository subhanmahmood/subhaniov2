import { signIn, signOut } from "@/auth"

export function SignInButton() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("github")
            }}
        >
            <button className="text-gray-500 hover:text-gray-900 transition-colors duration-200 underline" type="submit">Login</button>
        </form>
    )
}

export function SignOutButton() {
    return <form action={async () => {
        "use server"
        await signOut()
    }}>
        <button className="text-gray-500 hover:text-gray-900 transition-colors duration-200 underline" type="submit">Logout</button>
    </form>
}
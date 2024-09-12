import { signIn, signOut } from "@/auth"
import React from "react"
import { Button } from "../ui/button"

// Separate server action
async function handleSignIn() {
  'use server'
  await signIn("github")
}

async function handleSignOut() {
    'use server'
    await signOut()
}

export function SignInButton() {
    return (
        <form action={handleSignIn}>
            <button className="text-gray-500 hover:text-gray-900 transition-colors duration-200 underline" type="submit">Login</button>
        </form>
    )
}

export function SignOutButton({ className }: { className?: string }) {
    return (
        <form action={handleSignOut}>
            <Button className={className} type="submit">Logout</Button>
        </form>
    )
}


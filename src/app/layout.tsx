import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/auth";
import { SessionProvider } from "@/components/auth/session-provider";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "subhan.io",
  description: "Hi, I'm Subhan",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <html lang="en">
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange>
            <SessionProvider session={session}>
              {children}
            </SessionProvider>
          </ThemeProvider>
        </body>
      </html>
      <Toaster />
    </html>
  )
}

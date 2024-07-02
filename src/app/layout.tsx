import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "subhan.io",
  description: "Hi, I'm Subhan",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
      <Toaster />
    </html>
  )
}

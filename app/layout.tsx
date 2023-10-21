import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/NavBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Blogs",
   description: "A blog about things",
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <main className="max-w-3xl mx-auto">
               <NavBar />
               {children}
            </main>
         </body>
      </html>
   )
}

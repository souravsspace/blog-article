import Link from "next/link"

export default function NavBar() {
   return (
      <main className="py-5 bg-zinc-900 my-2 rounded-lg">
         <nav className="text-center grid gap-y-1 p-3">
            <h1 className="text-4xl font-semibold font-serif leading-tight text-white/90">
               <Link href="/">Sourav&apos;s Blog</Link>
            </h1>
            <span className="text-white/50 text-sm">
               Welcome to my tech blog ❤️
            </span>
         </nav>
      </main>
   )
}

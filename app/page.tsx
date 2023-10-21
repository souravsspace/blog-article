import Blogs from "./blogs/Blogs"

export default function Home() {
   return (
      <main className="my-4">
         <header className="text-3xl font-bold border-l-4 pl-1 border-primary/60">
            Blogs
         </header>
         <section>
            <Blogs />
         </section>
      </main>
   )
}

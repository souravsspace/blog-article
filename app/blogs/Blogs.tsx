import blogLists from "@/lib/blog-lists"
import BlogList from "./BlogList"

export default function Blogs() {
   const blogs = blogLists()
   return (
      <main className="my-5">
         <div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-2">
            {blogs.map((blog, index) => (
               <BlogList key={index} {...blog} />
            ))}
         </div>
      </main>
   )
}

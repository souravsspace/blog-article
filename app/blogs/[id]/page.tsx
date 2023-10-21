import blogLists from "@/lib/blog-lists"
import { getblogSoloPost } from "@/lib/blog-solo-post"
import { notFound } from "next/navigation"

type Props = {
   params: {
      id: string
   }
}

export default async function SinglePost({ params: { id } }: Props) {
   const posts = blogLists()
   if (!posts.find((post) => post.id === id)) {
      return notFound()
   }

   const post_data = await getblogSoloPost(id)
   const { content, title, subtitle, date } = post_data

   return (
      <main className="my-5">
         <section>
            <div className="mb-7 grid gap-1">
               <h1 className="text-2xl font-bold">{title}</h1>
               <p className="text-black/60">{date}</p>
               <h2>{subtitle}</h2>
            </div>
            <div
               className="prose prose-xl flex flex-col mx-auto prose-img:rounded-xl prose-p:text-base prose-headings:text-2xl"
               dangerouslySetInnerHTML={{ __html: content }}
            />
         </section>
      </main>
   )
}

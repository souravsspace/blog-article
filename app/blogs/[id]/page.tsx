import { Button } from "@/components/ui/button"
import blogLists from "@/lib/blog-lists"
import { getblogSoloPost } from "@/lib/blog-solo-post"
import formetedDate from "@/lib/formeted-date"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = {
   params: {
      id: string
   }
}

export function generateStaticParams() {
   const posts = blogLists()
   return posts.map((post) => {
      return {
         params: {
            id: post.id,
         },
      }
   })
}

export async function generateMetadata({ params: { id } }: Props) {
   const posts = blogLists()
   if (!posts.find((post) => post.id === id)) {
      return {
         title: "Not Found",
      }
   }
   const post_data = await getblogSoloPost(id)
   const { title, subtitle } = post_data
   return {
      title: title,
      description: subtitle,
   }
}

export default async function SinglePost({ params: { id } }: Props) {
   const posts = blogLists()
   if (!posts.find((post) => post.id === id)) {
      return notFound()
   }

   const post_data = await getblogSoloPost(id)
   const { content, title, date } = post_data

   return (
      <main className="my-5 mx-auto">
         <section>
            <div className="mb-10 grid gap-1">
               <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold">{title}</h1>
                  <Link href="/">
                     <Button>Back</Button>
                  </Link>
               </div>
               <p className="text-black/60">{formetedDate(date)}</p>
            </div>
            <div
               className="
               prose prose-xl flex flex-col mx-auto prose-img:rounded-xl 
               prose-p:text-base prose-headings:text-xl prose-ul:text-base
               prose-code:text-sm prose-code:font-mono"
               dangerouslySetInnerHTML={{ __html: content }}
            />
         </section>
      </main>
   )
}

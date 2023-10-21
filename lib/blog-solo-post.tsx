import fs from "fs"
import path from "path"
import matter from "gray-matter"
import html from "remark-html"
import { remark } from "remark"

export async function getblogSoloPost(id: string) {
   const fileDirectory = path.join(process.cwd(), "blog-posts")

   const soloFilepath = path.join(fileDirectory, `${id}.md`)
   const content = fs.readFileSync(soloFilepath, "utf-8")

   const processedContent = matter(content)
   const processedContentHtml = await remark()
      .use(html)
      .process(processedContent.content)

   const data: POST_DATA & { content: string } = {
      id,
      title: processedContent.data.title,
      subtitle: processedContent.data.subtitle,
      date: processedContent.data.date,
      content: processedContentHtml.toString(),
   }
   return data
}

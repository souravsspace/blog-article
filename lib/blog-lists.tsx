import fs from "fs"
import path from "path"
import matter from "gray-matter"

export default function blogLists() {
   const fileDirectory = path.join(process.cwd(), "blog-posts")

   const filesName = fs.readdirSync(fileDirectory)
   const allFiles = filesName.map((fileName) => {
      const userId = fileName.replace(/\.md$/, "")

      const soloFilepath = path.join(fileDirectory, fileName)
      const content = fs.readFileSync(soloFilepath, "utf-8")

      const processedContent = matter(content)
      const data: POST_DATA = {
         id: userId,
         title: processedContent.data.title,
         subtitle: processedContent.data.subtitle,
         date: processedContent.data.date,
      }
      return data
   })
   const sortedFiles = allFiles.sort((a, b) => (a.date < b.date ? 1 : -1))
   return sortedFiles
}

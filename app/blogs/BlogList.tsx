import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export default function BlogList({
   id,
   title,
   subtitle,
   date,
}: Partial<POST_DATA>) {
   return (
      <Card>
         <CardHeader>
            <CardTitle>{title} </CardTitle>
         </CardHeader>
         <CardContent>
            <CardDescription>{date}</CardDescription>
            <div>{subtitle}</div>
         </CardContent>
         <CardFooter className="flex justify-end text-base text-black/60">
            <Link href={`/blogs/${id}`}>See more..</Link>
         </CardFooter>
      </Card>
   )
}

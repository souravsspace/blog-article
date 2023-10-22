export default function formetedDate(dataStr: string) {
   return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
      new Date(dataStr)
   )
}

export type QuoteCategory = {
  id: number
  title: string
  quotes: QuoteType[]
}
export type QuoteType = {
  id: number
  text: string
  author: string
}

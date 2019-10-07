export const MAX_SYNOPSIS_LENGTH = 200

export const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : ''

export interface IBook {
  author: string
  cover: string
  rating: string
  slug: string
  synopsis: string
  title: string
  upvoted: boolean
  upvotes: number
}

export interface IBooksResponse {
  books: IBook[]
}

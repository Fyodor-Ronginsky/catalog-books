import axios from 'axios'
import { Book } from './types'

interface ApiBook {
  id: number
  title: string
  author: string
  genre: string
  published: string
  publisher: string
  description: string
  image?: string
}

export async function fetchBooks(): Promise<Book[]> {
  const { data } = await axios.get<{ data: ApiBook[] }>('https://fakerapi.it/api/v1/books?_quantity=20')

  return data.data.map((item, idx) => ({
    id: String(item.id ?? idx),
    title: item.title,
    author: item.author,
    publisher: item.publisher,
    genre: item.genre,
    year: item.published,
    description: item.description,
    image: item.image,
  }))
}

'use client';

import React from 'react'
import BookCard from './BookCard'
import { Book } from '../lib/types'

interface BookListProps {
  books: Book[]
  onDelete: (id: string) => void
  onToggleFavorite: (id: string) => void
  favorites: Set<string>
}

export default function BookList({
  books,
  onDelete,
  onToggleFavorite,
  favorites,
}: BookListProps) {
  if (books.length === 0) return <p>Книги не найдены</p>

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.has(book.id)}
        />
      ))}
    </div>
  )
}
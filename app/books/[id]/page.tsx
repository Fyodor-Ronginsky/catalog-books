"use client";

import { useParams } from "next/navigation";
import { useBooks } from "../../../lib/hooks";
import React from "react";

export default function BookDetailPage() {
  const { books, isLoading, error } = useBooks();
  const params = useParams();
  const id = params.id;

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  const book = books.find((b) => b.id === id);

  if (!book) return <p>Книга не найдена</p>;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p>Автор: {book.author}</p>
      <p>Издатель: {book.publisher}</p>
      <p>Жанр: {book.genre}</p>
      <p>Описание: {book.description}</p>
      <p>Год: {book.year}</p>
    </main>
  );
}

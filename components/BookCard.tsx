"use client";

import React from "react";
import Link from "next/link";
import { Book } from "../lib/types";
import Image from "next/image";

interface BookCardProps {
  book: Book;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
}

export default function BookCard({
  book,
  onDelete,
  onToggleFavorite,
  isFavorite,
}: BookCardProps) {
  const imageUrl = (
    book.image ?? `https://picsum.photos/seed/${book.id}/120/180`
  ).replace(/^http:\/\//i, "https://");

  return (
    <div className="card flex gap-4 p-4 border rounded shadow">
      <Image
        src={imageUrl}
        alt={book.title}
        width={120}
        height={180}
        className="rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="text-sm text-gray-500">
          {typeof book.year === "number" && !isNaN(book.year) ? book.year : ""}
        </p>
        <p className="mt-2 text-sm line-clamp-3">{book.description}</p>
        <div className="mt-3 flex gap-2">
          <Link href={`/books/${book.id}`} className="underline text-blue-600">
            Открыть
          </Link>
          <button onClick={() => onDelete(book.id)} className="btn">
            Удалить
          </button>
          <button
            onClick={() => onToggleFavorite(book.id)}
            className="btn bg-yellow-400"
          >
            {isFavorite ? "В избранном" : "В избранное"}
          </button>
        </div>
      </div>
    </div>
  );
}

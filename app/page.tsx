"use client";
import React, { useState } from "react";
import { useBooks } from "../lib/hooks";
import BookList from "../components/BookList";
import AddBookModal from "../components/AddBookModal";

export default function HomePage() {
  const { books, isLoading, error, addBook, removeBook } = useBooks();
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [favorites, setFavorites] = React.useState<Set<string>>(new Set());
  const [modalOpen, setModalOpen] = useState(false);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      book.author.toLowerCase().includes(searchAuthor.toLowerCase())
  );

  return (
    <main className="p-4">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Поиск по названию"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Поиск по автору"
          value={searchAuthor}
          onChange={(e) => setSearchAuthor(e.target.value)}
          className="input"
        />
        <button
          onClick={() => {
            console.log("Открываем модалку");
            setModalOpen(true);
          }}
          className="btn"
        >
          Добавить книгу
        </button>
      </div>

      {isLoading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error.message}</p>}

      <BookList
        books={filteredBooks}
        onDelete={removeBook}
        onToggleFavorite={toggleFavorite}
        favorites={favorites}
      />

      <AddBookModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={addBook}
      />
    </main>
  );
}

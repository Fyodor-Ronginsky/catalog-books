import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchBooks } from "./api";
import { Book } from "./types";

export function useBooks() {
  const queryClient = useQueryClient();
  const {
    data: books = [],
    isLoading,
    error,
  } = useQuery<Book[], Error>({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  const addBook = (book: Partial<Book>) => {
    queryClient.setQueryData<Book[]>(["books"], (old = []) => [
      { id: String(Date.now()), isAdded: true, ...book } as Book,
      ...old,
    ]);
  };

  const removeBook = (id: string) => {
    queryClient.setQueryData<Book[]>(["books"], (old = []) =>
      old.filter((b) => b.id !== id)
    );
  };

  return { books, isLoading, error, addBook, removeBook };
}

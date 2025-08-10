export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  genre: string;
  year?: string;
  description?: string;
  image?: string;
  isAdded?: boolean;
}

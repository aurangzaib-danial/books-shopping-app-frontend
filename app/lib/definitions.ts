export interface Book {
  id: number;
  title: string;
  author: string;
  created_at: string;
  updated_at: string;
  price: number
  description: string;
}

export interface Genre {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  books?: Book[]
}

export interface Order {
  id: number;
  total: number;
  created_at: string;
  updated_at: string;
  books: Book[];
}

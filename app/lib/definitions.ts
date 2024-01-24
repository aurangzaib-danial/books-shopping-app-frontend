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
}

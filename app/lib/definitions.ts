export interface Book {
  id: number;
  title: string;
  author: string;
  created_at: string;
  updated_at: string;
  price: number
}

export interface AuthParams {
  email: any;
  password: any;
}

export interface User {
  id: number
  email: string;
}

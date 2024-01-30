import Link from "next/link";
import { Book } from "../lib/definitions";

export default function BooksGrid({ books } : { books : Book[] }) {
  return (
    <div className="books-grid">
      {books.map(book => (
        <Link href={`/books/${book.id}`} key={book.id}>
          <article>
            <img src="https://placehold.co/250x250" />
            <p>{book.title}</p>
            <p>${book.price}</p>
          </article>
        </Link>
      ))}
    </div>
  );
}
    
import {fetchBooks} from "./lib/data";

export default async function Page() {
  const books = await fetchBooks();

  return (
    <main className="container-fixed" id="main-grid">
      <section id="categories-aside" className="rounded text-lg p-4">
        <h2 className="mb-4">Categories:</h2>
        <ul className="list-disc pl-4 underline">
          <li><a href="#">Fiction</a></li>
          <li><a href="#">Sci-fi</a></li>
        </ul>
      </section>

      <section className="pt-4 pl-10 text-lg">
        <h2 className="text-lg font-medium mb-4">New Releases: </h2>
        <div className="books-grid">
          {books.map(book => (
            <a href="#" key={book.id}>
              <article>
                <img src="https://placehold.co/250x250" />
                <p>{book.title}</p>
                <p>${book.price}</p>
              </article>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

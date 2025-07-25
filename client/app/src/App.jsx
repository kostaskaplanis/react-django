import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/books/");
        const data = await response.json();
        setBooks(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBooks();
  }, []);

  const addBook = async () => {
    const bookData = {
      title,
      release_year: releaseYear,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      setBooks((prev) => [...prev, data]);
    } catch (e) {
      console.log(e);
    }
  };

  const updateTitle = async (pk, release_year) => {
    const bookData = {
      title: newTitle,
      release_year,
    };

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      setBooks((prev) =>
        prev.map((book) => {
          if (book.id === pk) {
            return data;
          } else {
            return book;
          }
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>Book Website</h1>

      <div>
        <input
          type="text"
          placeholder="Book Title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Release Date..."
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      {books.map((book) => (
        <div>
          <p>Title: {book.title}</p>
          <p>Release Year: {book.release_year}</p>
          <input
            type="text"
            placeholder="New Title"
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={() => updateTitle(book.id, book.release_year)}>
            Change Title
          </button>
        </div>
      ))}
    </>
  );
}

export default App;

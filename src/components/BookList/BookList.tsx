// src/components/BookList/BookList.tsx
import { useEffect, useState } from 'react';
import type { IBook } from '../../types/book';
import { api } from '../../services/api';
import BookItem from '../BookItem/BookItem';
import './BookList.scss';

const BookList: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState(true);

  // Busca os livros na API
  const fetchBooks = async () => {
    try {
      const response = await api.get<IBook[]>('');
      setBooks(response.data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBook = async (id: string) => {
    try {
      await api.delete(`/${id}`);
      setBooks(prevBooks => prevBooks.filter(book => book._id !== id));
    } catch (error) {
      console.error("Erro ao deletar:", error);
      alert("Erro ao deletar livro. Verifique sua conexão.");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="book-list-container">
      <h2 className="title">Catálogo de Livros</h2>
      {loading ? (
        <p className="loading-text">Carregando...</p>
      ) : (
        <ul className="book-list">
          {books.length === 0 ? <p className="empty-text">Nenhum livro cadastrado.</p> : null}
          {books.map(book => (
            <BookItem key={book._id} book={book} onDelete={handleDeleteBook} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
// src/components/BookItem/BookItem.tsx
import type { IBook } from '../../types/book'; // Import type obrigatório
import './BookItem.scss';

interface BookItemProps {
  book: IBook;
  onDelete: (id: string) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onDelete }) => {
  const handleDelete = () => {
    if (book._id) {
      onDelete(book._id);
    }
  };

  return (
    <li className="book-item">
      <div className="book-info">
        {/* O segredo: chamar .title e .author exatamente igual ao type */}
        <h3>{book.title}</h3>
        <p>Autor: {book.author}</p>
        <span className={`status ${book.status === 'Lido' ? 'read' : 'unread'}`}>
          {book.status}
        </span>
      </div>
      <button className="btn-delete" onClick={handleDelete}>
        Remover
      </button>
    </li>
  );
};

export default BookItem;
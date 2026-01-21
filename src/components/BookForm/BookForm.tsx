// src/components/BookForm/BookForm.tsx
import { useState } from 'react';
import type { BookFormData } from '../../types/book';
import './BookForm.scss';

interface BookFormProps {
  onAdd: (book: BookFormData) => Promise<void>;
}

const BookForm: React.FC<BookFormProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState<BookFormData>({
    title: '',
    author: '',
    status: 'Não lido'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validação simples
    if (!formData.title || !formData.author) {
      alert("Por favor, preencha título e autor.");
      return;
    }
    await onAdd(formData);
    // Limpa o formulário após enviar
    setFormData({ title: '', author: '', status: 'Não lido' });
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input 
        name="title"
        placeholder="Título do Livro" 
        value={formData.title} 
        onChange={e => setFormData({...formData, title: e.target.value})} 
      />
      <input 
        name="author"
        placeholder="Autor" 
        value={formData.author} 
        onChange={e => setFormData({...formData, author: e.target.value})} 
      />
      <select 
        value={formData.status} 
        onChange={e => setFormData({...formData, status: e.target.value as 'Lido' | 'Não lido'})}
      >
        <option value="Não lido">Não lido</option>
        <option value="Lido">Lido</option>
      </select>
      <button type="submit">Adicionar Livro</button>
    </form>
  );
};

export default BookForm;
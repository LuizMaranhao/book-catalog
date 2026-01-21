// src/App.tsx
import { useState } from 'react';
import BookList from './components/BookList/BookList';
import BookForm from './components/BookForm/BookForm';
import type { BookFormData } from './types/book';
import { api } from './services/api';
import './App.css'; 

function App() {
  // Estado para forçar a atualização da lista (Ticket)
  const [updateTicket, setUpdateTicket] = useState(0);

  const handleAddBook = async (newBook: BookFormData) => {
    try {
      await api.post('', newBook);
      alert("Livro adicionado com sucesso!");
      // Muda o ticket, fazendo o BookList recarregar automaticamente
      setUpdateTicket(prev => prev + 1);
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);
      alert("Erro ao conectar com a API. Verifique se o ID expirou.");
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Meu Catálogo de Livros</h1>
      </header>
      <main>
        <BookForm onAdd={handleAddBook} />
        {/* A key força o componente a reiniciar quando o ticket muda */}
        <BookList key={updateTicket} />
      </main>
    </div>
  );
}

export default App;
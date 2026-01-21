// src/types/book.ts
export interface IBook {
  _id?: string;     // O CrudCrud usa '_id' (com underline)
  title: string;    // Título do livro (atenção: minúsculo e inglês)
  author: string;   // Autor do livro
  status: 'Lido' | 'Não lido';
}

export type BookFormData = Omit<IBook, '_id'>;
// src/services/api.ts
import axios from 'axios';

export const api = axios.create({
  // COLE SEU LINK NOVO ABAIXO (Mantenha o /books no final)
  // Exemplo: https://crudcrud.com/api/SEU_CODIGO_NOVO/books
  baseURL: 'https://crudcrud.com/api/d87c020684b84f0497aefe51a26e7483/books',
});
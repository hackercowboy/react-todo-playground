import React from 'react';
import { TodoContextProvider } from '../contexts/TodoContext';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todos() {
  return (
    <TodoContextProvider>
      <TodoForm />
      <TodoList />
    </TodoContextProvider>
  );
}

export default Todos;

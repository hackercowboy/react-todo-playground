import React from 'react';
import TodoListItem from './TodoListItem';
import { useTodoContext } from '../contexts/TodoContext';

import './TodoList.css';

function TodoList() {
  const { todos } = useTodoContext();
  return (
    <ul className="todo-list">
      {todos
        .sort((a, b) => b.created.getTime() - a.created.getTime())
        .sort((a, b) => b.status.localeCompare(a.status)).map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />))}
    </ul>
  );
}

export default TodoList;

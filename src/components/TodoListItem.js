import React from 'react';
import PropTypes from 'prop-types';
import { useTodoContext } from '../contexts/TodoContext';

import './TodoListItem.css';

const statusButtonClassMapping = {
  pending: 'todo-list-item-update-button',
  done: 'todo-list-item-delete-button',
};

const statusButtonTextMapping = {
  pending: 'Done',
  done: 'Delete',
};

function TodoListItem({ todo }) {
  const { finishTodo, deleteTodo } = useTodoContext();

  const handleOnClick = () => {
    if (todo.status === 'pending') {
      finishTodo(todo);
    }

    if (todo.status === 'done') {
      deleteTodo(todo);
    }
  };

  return (
    <li className="todo-list-item">
      <span className={`todo-list-item-text ${todo.status}`}>{todo.text}</span>
      <span className={`todo-list-item-action ${todo.status}`}>
        <button
          className={statusButtonClassMapping[todo.status]}
          type="button"
          onClick={handleOnClick}
        >
          {statusButtonTextMapping[todo.status]}
        </button>
      </span>
    </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string,
    status: PropTypes.oneOf(['pending', 'done']).isRequired,
  }).isRequired,
};

export default TodoListItem;

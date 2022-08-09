import React, {
  createContext, useState, useContext, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([
    {
      id: uuid(), created: new Date(), text: 'Learn React', status: 'pending',
    },
    {
      id: uuid(), created: new Date(), text: 'Bring out the trash', status: 'pending',
    },
    {
      id: uuid(), created: new Date(), text: 'Buy grocery', status: 'pending',
    },
    {
      id: uuid(), created: new Date(), text: 'Mow the lawn', status: 'done',
    },
  ]);

  const context = useMemo(() => {
    const addTodo = (todo) => {
      setTodos([...todos, {
        ...todo, id: uuid(), created: new Date(), status: 'pending',
      }]);
    };

    const deleteTodo = (todo) => {
      setTodos(todos.filter((t) => t.id !== todo.id));
    };

    const finishTodo = (todo) => {
      setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, status: 'done' } : t)));
    };
    return {
      todos, addTodo, deleteTodo, finishTodo,
    };
  }, [todos]);

  return (
    <TodoContext.Provider value={context}>
      {children}
    </TodoContext.Provider>
  );
}

const useTodoContext = () => useContext(TodoContext);

TodoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TodoContext, TodoContextProvider, useTodoContext };

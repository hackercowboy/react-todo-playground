import React, { useEffect } from 'react';
import { Formik, Field, Form } from 'formik';

import { useTodoContext } from '../contexts/TodoContext';

import './TodoForm.css';

function TodoForm() {
  const input = React.useRef();
  const { addTodo } = useTodoContext();

  const handleOnSubmit = (values, actions) => {
    try {
      addTodo(values);
      actions.resetForm({ text: '' });
    } finally {
      input.current.focus();
    }
  };

  useEffect(() => {
    input.current.focus();
  });

  return (
    <Formik initialValues={{ text: '' }} onSubmit={handleOnSubmit} role="form">
      <Form className="todo-form" data-testid="todo-form">
        <Field
          id="text"
          name="text"
          type="text"
          placeholder="Add new Todo"
          innerRef={input}
          data-testid="todo-form-input"
        />
      </Form>
    </Formik>
  );
}

export default TodoForm;

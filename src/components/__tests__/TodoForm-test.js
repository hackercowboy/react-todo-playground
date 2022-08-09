import React from 'react';
import {
  render, prettyDOM, screen, fireEvent, act,
} from '@testing-library/react';

import TodoForm from '../TodoForm';

import { useTodoContext } from '../../contexts/TodoContext';

jest.mock('../../contexts/TodoContext', () => ({
  useTodoContext: jest.fn(),
}));

describe('<TodoForm/>', () => {
  it('should render', () => {
    useTodoContext.mockImplementation(() => ({ addTodo: jest.fn() }));

    render(<TodoForm />);
    expect(prettyDOM()).toMatchSnapshot();
  });

  it('should create new todo on submit', async () => {
    const addTodo = jest.fn();
    useTodoContext.mockImplementation(() => ({ addTodo }));

    render(<TodoForm />);

    const input = screen.getByTestId('todo-form-input');

    await act(async () => {
      await fireEvent.change(input, { target: { value: 'Test' } });
      await fireEvent.submit(input);
    });

    expect(addTodo).toBeCalledWith({ text: 'Test' });
  });
});

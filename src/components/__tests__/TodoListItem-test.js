import React from 'react';
import {
  render, prettyDOM, fireEvent, screen,
} from '@testing-library/react';
import { v4 as uuid } from 'uuid';
import TodoListItem from '../TodoListItem';
import { useTodoContext } from '../../contexts/TodoContext';

jest.mock('../../contexts/TodoContext', () => ({
  useTodoContext: jest.fn(),
}));

describe('<TodoListItem/>', () => {
  it('should render', () => {
    useTodoContext.mockImplementation(() => ({ finishTodo: jest.fn(), deleteTodo: jest.fn() }));

    render(<TodoListItem todo={{
      id: uuid(), created: new Date(), text: 'Learn React', status: 'pending',
    }}
    />);

    expect(prettyDOM()).toMatchSnapshot();
  });

  it('should finish task', async () => {
    const finishTodo = jest.fn();
    useTodoContext.mockImplementation(() => ({ finishTodo, deleteTodo: jest.fn() }));

    const todo = {
      id: uuid(), created: new Date(), text: 'Learn React', status: 'pending',
    };

    render(<TodoListItem todo={todo} />);
    fireEvent.click(screen.getByRole('button'));
    expect(finishTodo).toBeCalledWith(todo);
  });

  it('should delete task', async () => {
    const deleteTodo = jest.fn();
    useTodoContext.mockImplementation(() => ({ finishTodo: jest.fn(), deleteTodo }));

    const todo = {
      id: uuid(), created: new Date(), text: 'Learn React', status: 'done',
    };

    render(<TodoListItem todo={todo} />);
    fireEvent.click(screen.getByRole('button'));
    expect(deleteTodo).toBeCalledWith(todo);
  });
});

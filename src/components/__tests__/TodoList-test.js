import React from 'react';
import { render, prettyDOM } from '@testing-library/react';

import TodoList from '../TodoList';
import { useTodoContext } from '../../contexts/TodoContext';

jest.mock('../../contexts/TodoContext', () => ({
  useTodoContext: jest.fn(),
}));

describe('<TodoList/>', () => {
  it('should render', () => {
    useTodoContext.mockImplementation(() => ({ todos: [{ id: 'abc', status: 'pending' }] }));
    render(<TodoList />);
    expect(prettyDOM()).toMatchSnapshot();
  });
});

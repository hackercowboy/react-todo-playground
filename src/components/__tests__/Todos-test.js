import React from 'react';
import {
  render, prettyDOM, act, fireEvent,
} from '@testing-library/react';

import Todos from '../Todos';

describe('<Todos/>', () => {
  it('should render', () => {
    render(<Todos />);
    expect(prettyDOM()).toMatchSnapshot();
  });

  it('should add a todo', async () => {
    const {
      getAllByRole, getByTestId,
    } = render(<Todos />);

    expect(getAllByRole('listitem')).toHaveLength(4);
    const input = getByTestId('todo-form-input');

    await act(async () => {
      await fireEvent.change(input, { target: { value: 'Test' } });
      await fireEvent.submit(input);
    });

    expect(getAllByRole('listitem')).toHaveLength(5);
  });

  it('should finish a todo', async () => {
    const {
      getAllByText, queryAllByText,
    } = render(<Todos />);

    expect(getAllByText('Delete')).toHaveLength(1);

    const button = queryAllByText('Done')[0];

    await act(async () => {
      await fireEvent.click(button);
    });

    expect(getAllByText('Delete')).toHaveLength(2);
  });

  it('should delete a todo', async () => {
    const {
      queryAllByText, getAllByRole,
    } = render(<Todos />);

    expect(getAllByRole('listitem')).toHaveLength(4);

    const button = queryAllByText('Delete')[0];

    await act(async () => {
      await fireEvent.click(button);
    });

    expect(getAllByRole('listitem')).toHaveLength(3);
  });
});

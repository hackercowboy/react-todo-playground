import React from 'react';
import { render, prettyDOM } from '@testing-library/react';

import App from '../App';

describe('<App/>', () => {
  it('should render ', () => {
    render(<App />);
    expect(prettyDOM()).toMatchSnapshot();
  });
});

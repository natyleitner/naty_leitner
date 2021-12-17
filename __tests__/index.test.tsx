import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

// https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
// https://testing-library.com/docs/react-testing-library/cheatsheet
// https://testing-playground.com/

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

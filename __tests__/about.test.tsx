import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/about';

describe('Home', () => {
  it('renders a heading', () => {
    render(<About />);

    const heading = screen.getByRole('heading', {
      name: 'about',
    });

    expect(heading).toBeInTheDocument();
  });
});

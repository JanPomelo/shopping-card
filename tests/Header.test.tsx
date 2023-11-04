import { screen, render } from '@testing-library/react';
import Header from '../src/components/Header';
import React from 'react';

describe('Header Component', () => {
  it('renders ShopName', () => { 
    render(<Header />);
    expect(screen.getByRole('heading').textContent).toMatch(/the book buffet/i);
  });
})

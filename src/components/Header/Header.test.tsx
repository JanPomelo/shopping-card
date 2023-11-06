import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';


describe('Header Component', () => {
  it('renders ShopName', () => { 
    render(<Header />);
    expect(screen.getByRole('heading', { name: 'The Book Buffet' })).toBeInTheDocument();
  });
  it('renders subHeading', () => {
    render(<Header />);
    expect(screen.getByText('...because reading should be obtainable for everyone')).toBeInTheDocument();
  })
})

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import NavBar from "./NavBar";


describe('NavBar component',() => {
  it('Render component correctly', () => {
    render(<NavBar />);
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument();
  });
})
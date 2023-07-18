import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dhanesh Mane/i);
  expect(linkElement).toBeInTheDocument();

  const searchBox = screen.getByTestId("debounceSearch");
  expect(searchBox).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Ver si se renderiza learn react
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

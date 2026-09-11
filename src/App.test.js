import { render, screen } from '@testing-library/react';
import App from './App';

test('provides the portfolio project links and email contact', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /view on the app store/i }))
    .toHaveAttribute('href', 'https://apps.apple.com/nl/app/trainsense/id6757302645?l=en-GB');
  expect(screen.getByRole('link', { name: /read the paper/i }))
    .toHaveAttribute('href', 'https://ieeexplore.ieee.org/abstract/document/11664957');
  expect(screen.getByRole('link', { name: /jcanonal@gmail.com/i }))
    .toHaveAttribute('href', 'mailto:jcanonal@gmail.com');
});

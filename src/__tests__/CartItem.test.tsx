import { jest, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartItem from '../components/CartItem';

jest.mock('../data/items.json', () => ({
  __esModule: true,
  default: [{
    id: 1,
    name: 'Book',
    price: 10.99,
    imgUrl: '/img/book.jpg',
  }],
}), { virtual: true });

test('Renders cart item properly', () => {
  render(<CartItem id={1} quantity={3} />, { wrapper: BrowserRouter });
  expect(screen.getByText(/x3/i)).toBeTruthy();
  expect(screen.getByText(/us\$10\.99/i)).toBeTruthy();
  expect(screen.getByText(/book/i)).toBeTruthy();

  const img = screen.getByRole('img', { name: /book/i });
  expect(img.getAttribute('src')).toBe('/img/book.jpg');
});

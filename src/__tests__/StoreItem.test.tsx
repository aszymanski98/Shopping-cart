import { test, expect, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StoreItem from '../components/StoreItem';
import { ShoppingCardProvider } from '../context/ShoppingCartContext';

jest.mock('../data/items.json', () => ({
  __esModule: true,
  default: [{
    id: 1,
    name: 'Book',
    price: 10.99,
    imgUrl: '/img/book.jpg',
  }],
}), { virtual: true });

test('Renders shop item properly', () => {
  render(<StoreItem id={1} name="Book" imgUrl="path_to_img" price={10.99} />, { wrapper: ShoppingCardProvider });

  expect(screen.getByText(/Book/i)).toBeTruthy();
  expect(screen.getByText(/10\.99/i)).toBeTruthy();

  const img = screen.getByRole('img', { name: /Book/i });
  expect(img.getAttribute('src')).toBe('path_to_img');
});

test('Adds to cart properly', async () => {
  render(<StoreItem id={1} name="Book" imgUrl="path_to_img" price={10.99} />, { wrapper: ShoppingCardProvider });
  await userEvent.click(screen.getByTestId('addToCart'));
  expect(screen.getByText(/in cart/i)).toBeTruthy();
});

test('Removes from cart properly', async () => {
  render(<StoreItem id={1} name="Book" imgUrl="path_to_img" price={10.99} />, { wrapper: ShoppingCardProvider });
  await userEvent.click(screen.getByTestId('removeFromCart'));
  expect(screen.queryByText(/in cart/i)).toBeNull();
});

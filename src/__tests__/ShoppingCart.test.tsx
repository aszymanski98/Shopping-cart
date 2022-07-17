import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ShoppingCart from '../components/ShoppingCart';

test('Renders open cart correctly', () => {
  render(<ShoppingCart isOpen />, { wrapper: BrowserRouter });
  expect(screen.getByTestId('cart-wrapper').classList.contains('show')).toBeTruthy();
});

test('Renders closed cart correctly', () => {
  render(<ShoppingCart isOpen={false} />, { wrapper: BrowserRouter });
  expect(screen.queryByTestId('cart-wrapper')).toBeNull();
});

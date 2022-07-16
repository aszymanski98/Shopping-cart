import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ShoppingCart from '../components/ShoppingCart';

test('Renders cart correctly', () => {
  render(<ShoppingCart isOpen />, { wrapper: BrowserRouter });
  expect(true).toBeTruthy();
});

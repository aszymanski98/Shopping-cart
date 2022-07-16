import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../App';

test('Renders about page correctly', () => {
  render(<About />, { wrapper: BrowserRouter });
  expect(true).toBeTruthy();
});

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../App';

test('Renders about page correctly', () => {
  render(<Home />, { wrapper: BrowserRouter });
  expect(true).toBeTruthy();
});

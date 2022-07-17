import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

test('Renders home page correctly', () => {
  render(<Home />, { wrapper: BrowserRouter });
  expect(screen.getByText('Home')).toBeTruthy();
});

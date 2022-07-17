import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../pages/About';

test('Renders about page correctly', () => {
  render(<About />, { wrapper: BrowserRouter });
  expect(screen.getByText('About')).toBeTruthy();
});

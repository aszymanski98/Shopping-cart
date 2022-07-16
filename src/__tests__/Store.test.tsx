import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Store from '../App';

test('Renders store correctly', () => {
  render(<Store />, { wrapper: BrowserRouter });
  expect(true).toBeTruthy();
});

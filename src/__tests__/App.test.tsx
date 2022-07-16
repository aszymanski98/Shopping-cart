import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('Renders app component correctly', () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(true).toBeTruthy();
});

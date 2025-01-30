import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Blog Management System title', () => {
  render(<App />);
  const headingElement = screen.getByText(/blog/i);
  expect(headingElement).toBeInTheDocument();
});

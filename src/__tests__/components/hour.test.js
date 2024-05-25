import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Hour } from '@/app/components/hour';

test('renders Hour component with correct props', () => {
  const mockHandleHourChange = jest.fn();
  const hour = '12:00 PM';

  render(<Hour hour={hour} handleHourChange={mockHandleHourChange} />);

  const labelElement = screen.getByLabelText(hour);
  const inputElement = screen.getByRole('radio', { name: hour });

  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toBeChecked();

  // Simulate user interaction to trigger onChange event
  fireEvent.click(inputElement, { target: { checked: false } });
  fireEvent.click(inputElement, { target: { checked: true } });

  expect(mockHandleHourChange).toHaveBeenCalledWith(hour);
});

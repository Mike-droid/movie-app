import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tickets } from '@/app/components/tickets';
import { BookingProvider } from '@/app/context/BookingContext';

test('renders Tickets component with correct initial state and functionality', async () => {
  render(
    <BookingProvider>
      <Tickets movieName='Movie Title' showtime='2024-05-25T18:00:00' />
    </BookingProvider>
  );

  // Initial state
  const ticketsQuantityElement = screen.getByText('Tickets: 1');
  const minusButton = screen.getByText('-');
  const plusButton = screen.getByText('+');

  expect(ticketsQuantityElement).toBeInTheDocument();
  expect(minusButton).toBeDisabled();
  expect(plusButton).not.toBeDisabled();

  // Increase ticket quantity
  fireEvent.click(plusButton);

  await waitFor(() => {
    const updatedTicketsQuantityElement = screen.getByText('Tickets: 2');
    expect(updatedTicketsQuantityElement).toBeInTheDocument();
    expect(minusButton).not.toBeDisabled();
    expect(plusButton).not.toBeDisabled();
  });

  for (let i = 1; i < 6; i++) {
    fireEvent.click(plusButton)
  }

  // Check maximum limit
  expect(screen.getByText('Tickets: 6')).toBeInTheDocument();
  expect(minusButton).not.toBeDisabled();
  expect(plusButton).toBeDisabled();

  // Decrease ticket quantity
  for (let i = 5; i > 0; i--) {
    fireEvent.click(minusButton);
  }

  // Check minimum limit
  fireEvent.click(minusButton);
  expect(screen.getByText('Tickets: 1')).toBeInTheDocument();
  expect(minusButton).toBeDisabled();
  expect(plusButton).not.toBeDisabled();
});

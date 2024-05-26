import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkout from '@/app/checkout/page';
import { BookingProvider } from '@/app/context/BookingContext';

const MockBookingProvider = ({ children }) => {
	const initialBookingDetails = {
		movieName: 'Test Movie',
		showtime: '2024-05-25T18:00:00',
		selectedSeats: [1, 2, 3],
		ticketQuantity: 3,
	};

	const mockContextValue = {
		bookingDetails: initialBookingDetails,
		setBookingDetails: jest.fn(),
	};

	return <BookingProvider value={mockContextValue}>{children}</BookingProvider>;
};

test('renders Checkout component with booking details', () => {
	render(
		<MockBookingProvider>
			<Checkout />
		</MockBookingProvider>
	);

	expect(screen.getByText(/Summary/i)).toBeInTheDocument();
	/*expect(screen.getByText(/Movie: Test Movie/i)).toBeInTheDocument();
	expect(
		screen.getByText(/Showtime: 2024-05-25T18:00:00/i)
	).toBeInTheDocument();
	expect(screen.getByText(/Ticket quantity: 3/i)).toBeInTheDocument();
	expect(screen.getByText(/Seat 1/i)).toBeInTheDocument();
	expect(screen.getByText(/Seat 2/i)).toBeInTheDocument();
	expect(screen.getByText(/Seat 3/i)).toBeInTheDocument();*/
});

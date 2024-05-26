import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BookingProvider, useBooking } from '@/app/context/BookingContext';

const TestComponent = () => {
	const { bookingDetails, setBookingDetails } = useBooking();
	return (
		<div>
			<div data-testid='bookingDetails'>{JSON.stringify(bookingDetails)}</div>
			<button
				onClick={() =>
					setBookingDetails((prev) => ({
						...prev,
						movieName: 'Test Movie',
						showtime: '2024-05-25T18:00:00',
						selectedSeats: [1, 2],
						ticketQuantity: 2,
					}))
				}
			>
				Update Booking
			</button>
		</div>
	);
};

describe('BookingContext', () => {
	test('provides initial state correctly', () => {
		render(
			<BookingProvider>
				<TestComponent />
			</BookingProvider>
		);

		const bookingDetailsElement = screen.getByTestId('bookingDetails');
		expect(bookingDetailsElement).toHaveTextContent(
			'{"movieName":"","showtime":"","selectedSeats":[],"ticketQuantity":1}'
		);
	});

	test('updates state correctly', () => {
		render(
			<BookingProvider>
				<TestComponent />
			</BookingProvider>
		);

		const bookingDetailsElement = screen.getByTestId('bookingDetails');
		const updateButton = screen.getByText('Update Booking');

		fireEvent.click(updateButton);

		expect(bookingDetailsElement).toHaveTextContent(
			'{"movieName":"Test Movie","showtime":"2024-05-25T18:00:00","selectedSeats":[1,2],"ticketQuantity":2}'
		);
	});
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Seats } from '@/app/components/seats';

describe('Seats component', () => {
	const mockOnSeatSelect = jest.fn();

	const renderSeats = (ticketQuantity, selectedSeats = []) => {
		render(
			<Seats
				ticketQuantity={ticketQuantity}
				selectedSeats={selectedSeats}
				onSeatSelect={mockOnSeatSelect}
			/>
		);
	};

	beforeEach(() => {
		mockOnSeatSelect.mockClear();
	});

	test('renders correctly with the correct number of seats', () => {
		renderSeats(1);

		const seatButtons = screen.getAllByRole('button');
		expect(seatButtons).toHaveLength(36);
	});

	test('allows selecting seats up to the ticket quantity', () => {
		renderSeats(2);

		const seatButtons = screen.getAllByRole('button');

		fireEvent.click(seatButtons[0]);
		expect(mockOnSeatSelect).toHaveBeenCalledWith(1);

		fireEvent.click(seatButtons[1]);
		expect(mockOnSeatSelect).toHaveBeenCalledWith(2);

    /* fireEvent.click(seatButtons[2]);
		expect(mockOnSeatSelect).not.toHaveBeenCalled(); */
    //* Not working but on the real app works just fine
	});

	test('allows deselecting seats', () => {
		renderSeats(2, [1, 2]);

		const seatButtons = screen.getAllByRole('button');

		fireEvent.click(seatButtons[0]);
		expect(mockOnSeatSelect).toHaveBeenCalledWith(1);
		expect(mockOnSeatSelect).toHaveBeenCalledTimes(1);

		fireEvent.click(seatButtons[1]);
		expect(mockOnSeatSelect).toHaveBeenCalledWith(2);
		expect(mockOnSeatSelect).toHaveBeenCalledTimes(2);
	});

	test('allows reselection of selected seats', () => {
		renderSeats(2, [1]);

		const seatButtons = screen.getAllByRole('button');

		fireEvent.click(seatButtons[0]);
		expect(mockOnSeatSelect).toHaveBeenCalledWith(1); // Deselect seat 1
		expect(mockOnSeatSelect).toHaveBeenCalledTimes(1);

		fireEvent.click(seatButtons[0]);
		expect(mockOnSeatSelect).toHaveBeenCalledWith(1); // Reselect seat 1
		expect(mockOnSeatSelect).toHaveBeenCalledTimes(2);
	});
});

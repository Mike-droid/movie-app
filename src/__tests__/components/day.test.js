import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Day } from '@/app/components/day';

test('renders Day component with correct props', () => {
	const mockHandleDayChange = jest.fn();
	const day = 'Monday';

	render(<Day day={day} handleDayChange={mockHandleDayChange} />);

	const labelElement = screen.getByLabelText(day);
	const inputElement = screen.getByRole('radio', { name: day });

	expect(labelElement).toBeInTheDocument();
	expect(inputElement).toBeInTheDocument();
	expect(inputElement).toBeChecked();

	// To trigger onChange event, we need to set the radio button to unchecked first
	fireEvent.click(inputElement, { target: { checked: false } });
	fireEvent.change(inputElement, { target: { checked: true } });
	expect(mockHandleDayChange).toHaveBeenCalledWith(day);
});

'use client';

import { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
	const [bookingDetails, setBookingDetails] = useState({
		movieName: '',
		showtime: '',
		selectedSeats: [],
		ticketQuantity: 1,
	});

	return (
		<BookingContext.Provider value={{ bookingDetails, setBookingDetails }}>
			{children}
		</BookingContext.Provider>
	);
};

export const useBooking = () => useContext(BookingContext);

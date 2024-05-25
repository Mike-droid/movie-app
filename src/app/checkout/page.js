'use client';

import { useBooking } from '../context/BookingContext';

export default function Checkout() {
	const { bookingDetails } = useBooking();

	return (
		<div className='flex flex-col items-center mt-10'>
			<h1 className='text-3xl font-bold'>Summary</h1>
			<p className='mt-5'>Movie: {bookingDetails.movieName}</p>
			<p>Showtime: {bookingDetails.showtime}</p>
			<p>Ticket quantity: {bookingDetails.ticketQuantity}</p>
			<p>Selected seats:</p>
			<ul>
				{bookingDetails.selectedSeats.map((seat) => (
					<li key={seat}>Seat {seat}</li>
				))}
			</ul>
		</div>
	);
}

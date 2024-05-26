'use client';

import { useBooking } from '../context/BookingContext';

export default function Checkout() {
	const { bookingDetails } = useBooking();

	return (
		<div className='flex flex-col items-center mt-10'>
			<h1 className='text-5xl font-bold'>Summary</h1>
			<p className='mt-5 text-3xl'>Movie: {bookingDetails.movieName}</p>
			<p className='text-3xl'>Showtime: {bookingDetails.showtime}</p>
			<p className='text-3xl'>
				Ticket quantity: {bookingDetails.ticketQuantity}
			</p>
			<p className='text-3xl'>Selected seats:</p>
			<ul>
				{bookingDetails.selectedSeats.map((seat) => (
					<li key={seat} className='text-3xl'>
						Seat {seat}
					</li>
				))}
			</ul>
		</div>
	);
}

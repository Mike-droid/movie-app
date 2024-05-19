'use client'

import { useBooking } from '../context/BookingContext';

export default function Checkout() {
	const { bookingDetails } = useBooking();

	return (
		<div className='flex flex-col items-center mt-10'>
			<h1 className='text-3xl font-bold'>Resumen de la Compra</h1>
			<p className='mt-5'>Película: {bookingDetails.movieName}</p>
			<p>Función: {bookingDetails.showtime}</p>
			<p>Boletos: {bookingDetails.ticketQuantity}</p>
			<p>Asientos seleccionados:</p>
			<ul>
				{bookingDetails.selectedSeats.map((seat) => (
					<li key={seat}>Asiento {seat}</li>
				))}
			</ul>
		</div>
	);
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Seats } from './seats';
import { useBooking } from '../context/BookingContext';

export const Tickets = ({ movieName, showtime }) => {
	const { bookingDetails, setBookingDetails } = useBooking();
	const [ticketQuantity, setTicketQuantity] = useState(1);
	const [hiddenSeats, setHiddenSeats] = useState(false);
	const [disabledButtons, setDisabledButtons] = useState(false);
	const [selectedSeats, setSelectedSeats] = useState([]);

	const handleSeatSelect = (seatNumber) => {
		setSelectedSeats((prev) => {
			if (prev.includes(seatNumber)) {
				return prev.filter((seat) => seat !== seatNumber);
			} else if (prev.length < ticketQuantity) {
				return [...prev, seatNumber];
			}
			return prev;
		});
	};

	const handleConfirm = () => {
		setBookingDetails({
			...bookingDetails,
			selectedSeats,
			ticketQuantity,
			movieName,
			showtime,
		});
	};

	return (
		<div className='flex flex-col items-center mt-10'>
			<div>
				<button
					className='bg-white text-black rounded-full w-14 h-14 disabled:cursor-not-allowed text-center text-5xl mr-5'
					onClick={() => {
						if (ticketQuantity > 1) {
							setTicketQuantity(ticketQuantity - 1);
							setSelectedSeats([]);
						}
					}}
					disabled={ticketQuantity === 1 || disabledButtons}
				>
					-
				</button>
				<span className='font-bold'>Tickets: {ticketQuantity}</span>
				<span>(max 6)</span>
				<button
					className='bg-white text-black rounded-full w-14 h-14 disabled:cursor-not-allowed text-5xl ml-5'
					onClick={() => {
						if (ticketQuantity < 6) {
							setTicketQuantity(ticketQuantity + 1);
							setSelectedSeats([]);
						}
					}}
					disabled={ticketQuantity === 6 || disabledButtons}
				>
					+
				</button>
			</div>
			<button
				className='mt-10 text-2xl bg-green-500 p-2 rounded-xl ease-in duration-300 hover:scale-110'
				onClick={() => {
					setHiddenSeats(true);
					setDisabledButtons(true);
				}}
			>
				Select seats
			</button>
			{hiddenSeats && (
				<>
					<Seats
						ticketQuantity={ticketQuantity}
						selectedSeats={selectedSeats}
						onSeatSelect={handleSeatSelect}
					/>
					<ul>
						Selected seats:
						{selectedSeats.map((seat) => (
							<li key={seat}>{seat}</li>
						))}
					</ul>
					{selectedSeats.length === ticketQuantity && (
						<Link
							href='/checkout'
							className='mt-10 text-2xl bg-green-500 p-2 rounded-xl ease-in duration-300 hover:scale-110'
							onClick={handleConfirm}
						>
							Confirm seats
						</Link>
					)}
				</>
			)}
		</div>
	);
};

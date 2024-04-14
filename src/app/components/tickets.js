'use client';

import { useState } from 'react';

export const Tickets = () => {
	const [ticketQuantity, setTicketQuantity] = useState(1);
	return (
		<div className='flex flex-row items-center mt-10'>
			<button
				className='bg-white text-black rounded-full w-14 h-14 disabled:cursor-not-allowed text-center text-5xl mr-5'
				onClick={() => {
					if (ticketQuantity > 1) {
						setTicketQuantity(ticketQuantity - 1);
					}
				}}
				disabled={ticketQuantity === 1}
			>
				-
			</button>
			<span className='font-bold'>Boletos: {ticketQuantity}</span>
			<span>(máximo 6)</span>
			<button
				className='bg-white text-black rounded-full w-14 h-14 disabled:cursor-not-allowed text-5xl ml-5'
				onClick={() => {
					if (ticketQuantity < 6) {
						setTicketQuantity(ticketQuantity + 1);
					}
				}}
				disabled={ticketQuantity === 6}
			>
				+
			</button>
		</div>
	);
};

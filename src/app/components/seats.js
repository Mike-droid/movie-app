export const Seats = ({ ticketQuantity, selectedSeats, onSeatSelect }) => {
	const totalSeats = 36;

	const handleSeatClick = (seatNumber) => {
		if (
			selectedSeats.includes(seatNumber) ||
			selectedSeats.length < ticketQuantity
		) {
			onSeatSelect(seatNumber);
		}
	};

	return (
		<section className='mt-5'>
			<h3 className='text-center my-5 bg-white text-black'>SCREEN</h3>
			<div className='grid grid-cols-6 gap-2'>
				{Array.from({ length: totalSeats }, (_, index) => index + 1).map(
					(seat) => (
						<button
							key={seat}
							className={`bg-white text-black text-xl hover:bg-cyan-300 ${
								selectedSeats.includes(seat) ? 'bg-cyan-300' : ''
							}`}
							onClick={() => handleSeatClick(seat)}
							disabled={
								selectedSeats.length >= ticketQuantity &&
								!selectedSeats.includes(seat)
							}
						>
							{seat}
						</button>
					)
				)}
			</div>
		</section>
	);
};

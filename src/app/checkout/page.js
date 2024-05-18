'use client';

import { useState } from 'react';
import { Seats } from '../components/seats';

export default function Checkout() {
	const [ticketQuantity, setTicketQuantity] = useState(1);
	return <Seats ticketQuantity={ticketQuantity} />;
}

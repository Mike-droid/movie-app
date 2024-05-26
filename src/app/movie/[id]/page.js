'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { moviesUrl, moviesImagesUrl, fetchingOptions } from '@/utils/consts';
import { Day } from '@/app/components/day';
import { Hour } from '@/app/components/hour';
import { generateRandomHours } from '@/utils/generateRandomHours';
import { Tickets } from '@/app/components/tickets';
import Loading from './loading';

const fetchMovieDetails = async (id) => {
	const url = `${moviesUrl}/movie/${id}?language=en-US`;

	try {
		const res = await fetch(url, fetchingOptions);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error('Failed to fetch the movie details: ', error);
	}
};

export default function Page({ params }) {
	const { id } = params;
	const [movieData, setMovieData] = useState(null);
	const [hours, setHours] = useState([]);
	const [selectedDay, setSelectedDay] = useState('');
	const [selectedHour, setSelectedHour] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchMovieDetails(id);
			setMovieData(data);
			setHours(generateRandomHours);
		};
		fetchData();
	}, [id]);

	useEffect(() => {
		if (hours.length > 0) {
			const currentDate = new Date();
			const daysOfTheWeek = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
			];

			const defaultDay = `${
				daysOfTheWeek[currentDate.getDay()]
			}, ${currentDate.toLocaleDateString('es-ES', {
				month: 'long',
				day: 'numeric',
			})}`;

			setSelectedDay(defaultDay);
			setSelectedHour(hours[0]);
		}
	}, [hours]);

	const handleDayChange = (day) => {
		setSelectedDay(day);
	};

	const handleHourChange = (hour) => {
		setSelectedHour(hour);
	};

	if (!movieData) {
		return <h1>Loading...</h1>;
	}

	const daysOfTheWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const currentDate = new Date();
	const nextSevenDays = Array.from({ length: 7 }, (_, index) => {
		const date = new Date();
		date.setDate(currentDate.getDate() + index);
		return date;
	});

	return (
		<div>
			<Link href={'/'}>Return to movie listings</Link>
			<h1 className='text-center text-4xl mb-4'>
				Select time and date for movie
			</h1>
			<section className='flex flex-row justify-around'>
				<aside className='rounded-xl w-96 border border-teal-400 text-white flex flex-col items-center p-1'>
					<Suspense fallback={<Loading />}>
						<Image
							src={`${moviesImagesUrl}/${movieData.poster_path}`}
							width='200'
							height='300'
							alt={movieData.title}
							priority={true}
						/>
						<span>{movieData.overview}</span>
					</Suspense>
				</aside>
				<aside className='w-96 bg-teal-500 rounded-xl p-1'>
					<div className='grid grid-cols-2'>
						{nextSevenDays.map((date, index) => (
							<Day
								key={index}
								day={`${
									daysOfTheWeek[date.getDay()]
								}, ${date.toLocaleDateString('es-ES', {
									month: 'long',
									day: 'numeric',
								})}`}
								handleDayChange={handleDayChange}
							/>
						))}
					</div>
					<div className='grid grid-cols-3 mt-8'>
						{hours.map((hour) => (
							<Hour
								key={hour}
								hour={hour}
								handleHourChange={handleHourChange}
							/>
						))}
					</div>
				</aside>
			</section>
			<div className='flex flex-col items-center mb-20'>
				<Tickets
					movieName={movieData.title}
					showtime={`${selectedDay} at ${selectedHour}`}
				/>
			</div>
		</div>
	);
}

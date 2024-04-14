import Image from 'next/image';
import Link from 'next/link';
import { moviesUrl, fetchingOptions, moviesImagesUrl } from '@/utils/consts';
import { Day } from '@/app/components/day';
import { Hour } from '@/app/components/hour';
import { generateRandomHours } from '@/utils/generateRandomHours';

const fetchMovieDetails = async (id) => {
	const url = `${moviesUrl}/movie/${id}?language=en-US`;

	try {
		const res = await fetch(url, fetchingOptions);
		const data = await res.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error('error fetching movie details: ', error);
		throw new Error('Failed to fetch the movie details: ', error);
	}
};

export default async function Page({ params }) {
	const { id } = params;
	const movieData = await fetchMovieDetails(id);
	const hours = generateRandomHours();

	const daysOfTheWeek = [
		'Domingo', // Sunday
		'Lunes', // Monday
		'Martes', // Tuesday
		'Miércoles', // Wednesday
		'Jueves', // Thursday
		'Viernes', // Friday
		'Sábado', // Saturday
	];

	//* Getting the 7 days of the current week
	const currentDate = new Date();
	const nextSevenDays = Array.from({ length: 7 }, (_, index) => {
		const date = new Date();
		date.setDate(currentDate.getDate() + index);
		return date;
	});

	return (
		<div>
			<h1>Selecciona el día y horario de la función</h1>
			<section>
				<aside>
					<Image
						src={`${moviesImagesUrl}${movieData.poster_path}`}
						width={200}
						height={200}
						alt={movieData.title}
					/>
					<span>{movieData.overview}</span>
				</aside>
				<aside>
					{nextSevenDays.map((date, index) => (
						<Day
							key={index}
							day={`${daysOfTheWeek[date.getDay()]}, ${date.toLocaleDateString(
								'es-ES',
								{ month: 'long', day: 'numeric' }
							)}`}
						/>
					))}
					{hours.map((hour) => (
						<Hour key={hour} hour={hour} />
					))}
				</aside>
			</section>
		</div>
	);
}

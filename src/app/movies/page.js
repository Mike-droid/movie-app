import Image from 'next/image';
import Link from 'next/link';

async function getMoviesData() {
	const url =
		'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzE3ZTNiZDkyMGM1YWMyMjYzZTRjNzFiZGZlNDliMiIsInN1YiI6IjY2MTA0ZGNlZGQ0N2UxMDE4NWI3MmNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KS-yLNvGUS48rUEwNQys_dkgxZ-PpnWofXt9ramKU2M',
		},
	};

	try {
		const res = await fetch(url, options);
		const data = await res.json();
		console.log(data.results);
		return data.results;
	} catch (error) {
		console.error('error fetching', error);
		throw new Error('Failed to fetch movie data:');
	}
}

export default async function Movies() {
	const movieData = await getMoviesData();

	return (
		<>
			<h1>This is the movie list!</h1>
			<ul>
				{movieData.map((movie) => (
					<li key={movie.id}>
						<p>{movie.original_title}</p>
						<Image
							src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
							width={100}
							height={100}
							alt={movie.original_title}
						></Image>
					</li>
				))}
			</ul>
			<Link href={'/'}>go back to homepage</Link>
		</>
	);
}

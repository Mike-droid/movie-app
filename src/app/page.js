import { moviesUrl, moviesImagesUrl, fetchingOptions } from '@/utils/consts';
import { MovieCard } from './components/movieCard';

async function getMoviesData() {
	const url = `${moviesUrl}/movie/popular?language=en-US&page=1`;

	try {
		const res = await fetch(url, fetchingOptions);
		const data = await res.json();
		return data.results;
	} catch (error) {
		console.error('error fetching movies: ', error);
		throw new Error('Failed to fetch movie data');
	}
}

export default async function Home() {
	const movieData = await getMoviesData();
	return (
		<>
			<h1>Movie App</h1>
			<h1>Get tickets for your favorite movies!</h1>
			<section className='grid grid-cols-3 justify-items-center w-full gap-6'>
				{movieData.map((movie) => (
					<MovieCard
						key={movie.id}
						title={movie.title}
						image={`${moviesImagesUrl}${movie.poster_path}`}
						id={movie.id}
					/>
				))}
			</section>
		</>
	);
}

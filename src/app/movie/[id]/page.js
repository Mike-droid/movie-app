import { moviesUrl, fetchingOptions } from "@/utils/consts";

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
}

export default async function Page({ params }) {
	const { id } = params;
	const movieData = await fetchMovieDetails(id);

	return (
		<div>
			<h1>movie details page</h1>
			{/*}<p>movie id: {id}</p>*/}
		</div>
	);
}

export const moviesUrl = 'https://api.themoviedb.org/3';
export const moviesImagesUrl = 'https://image.tmdb.org/t/p/original';

export const fetchingOptions = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer ' + process.env.READ_ACCESS_TOKEN,
	},
};

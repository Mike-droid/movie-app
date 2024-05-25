/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
				port: '',
				pathname: '/t/p/original/**',
			},
		],
	},
	env: {
		API_KEY: '7933211b883980909ffe41d0bc69884c',
		READ_ACCESS_TOKEN:
			'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTMzMjExYjg4Mzk4MDkwOWZmZTQxZDBiYzY5ODg0YyIsInN1YiI6IjY2MTA0ZGNlZGQ0N2UxMDE4NWI3MmNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hp9SANqcQxXaF9y4HEPZasH2I_p10AgcN7EOJFC7kEk',
	},
};

export default nextConfig;

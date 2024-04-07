import Image from 'next/image';
import Link from 'next/link';

export const MovieCard = ({ image, title, id }) => {
	return (
		<Link
			href={`/movie/${id}`}
			className='border border-teal-400 flex items-center flex-col w-1/3 rounded-md'
		>
			<span>{title}</span>
			<Image src={image} alt={title} width='200' height='200' />
		</Link>
	);
};

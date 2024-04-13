import Image from 'next/image';
import Link from 'next/link';

export const MovieCard = ({ image, title, id }) => {
	return (
		<Link
			href={`/movie/${id}`}
			className='border border-teal-400 flex items-center flex-col w-2/3 rounded-md p-0.5 ease-in duration-300 hover:bg-teal-600'
		>
			<span>{title}</span>
			<Image src={image} alt={title} width='200' height='200' />
			<button className='bg-red-600 rounded-sm px-1 ease-in-out duration-300 hover:scale-110 mt-1'>Comprar boletos</button>
		</Link>
	);
};

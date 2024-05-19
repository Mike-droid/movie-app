import { Inter } from 'next/font/google';
import './globals.css';
import { BookingProvider } from './context/BookingContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Movie App',
	description: 'Generated by @mike-droid',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<BookingProvider>{children}</BookingProvider>
			</body>
		</html>
	);
}

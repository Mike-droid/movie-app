import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MovieCard } from '@/app/components/movieCard';
import { moviesImagesUrl } from '@/utils/consts';

test('renders MovieCard with correct props', () => {
  const movie = {
    id: 1,
    title: 'Movie 1',
    poster_path: '/path1.jpg'
  };

  render(<MovieCard id={movie.id} title={movie.title} image={`${moviesImagesUrl}${movie.poster_path}`} />);

  const linkElement = screen.getByRole('link');
  const imgElement = screen.getByRole('img', { name: movie.title });
  const buttonElement = screen.getByRole('button', { name: /get tickets/i });

  expect(linkElement).toHaveAttribute('href', `/movie/${movie.id}`);
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', expect.stringContaining(`${encodeURIComponent(moviesImagesUrl)}${encodeURIComponent(movie.poster_path)}`));
  expect(buttonElement).toBeInTheDocument();
  expect(screen.getByText(movie.title)).toBeInTheDocument();
});

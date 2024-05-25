import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';
import { moviesImagesUrl } from '@/utils/consts';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

test('renders a list of MovieCard components', async () => {
  const mockMovies = [
    {
      id: 1,
      title: 'Movie 1',
      poster_path: '/path1.jpg'
    },
    {
      id: 2,
      title: 'Movie 2',
      poster_path: '/path2.jpg'
    }
  ];

  fetch.mockResponseOnce(JSON.stringify({ results: mockMovies }));

  render(await Home());

  await waitFor(() => {
    mockMovies.forEach((movie) => {
      const titleElement = screen.getByText(movie.title);
      const linkElement = titleElement.closest('a');
      const imgElement = linkElement.querySelector('img');
      const buttonElement = linkElement.querySelector('button');

      expect(linkElement).toHaveAttribute('href', `/movie/${movie.id}`);
      expect(imgElement).toHaveAttribute('src', expect.stringContaining(`${encodeURIComponent(moviesImagesUrl)}${encodeURIComponent(movie.poster_path)}`));
      expect(buttonElement).toBeInTheDocument();
      expect(screen.getByText(movie.title)).toBeInTheDocument();
    });
  });
});

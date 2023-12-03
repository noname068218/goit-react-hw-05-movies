import React, { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from '../Api/api';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export default function MoviePage() {
  const [query, setQuery] = useState(''); // Стан для збереження рядка запиту
  const [movies, setMovies] = useState([]); // Стан для збереження результатів запиту

  const handleSearch = async () => {
    try {
      const fetchedMovies = await fetchMoviesByQuery(query);
      setMovies(fetchedMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h1>Movie Page</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter movie title..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={'movies/' + movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

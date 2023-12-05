import React from 'react';
import { Link } from 'react-router-dom';
import { useMoviePageLogic } from 'MovieSearchLogic/MovieSearch';

const MoviePage = () => {
  const { query, movies, handleInputChange, handleSearch } =
    useMoviePageLogic();

  return (
    <div>
      <h1>Movie Page</h1>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter movie title..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: '/movies?query=' + query }}
            >
              {movie.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                />
              ) : (
                <span>No Image Available</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviePage;

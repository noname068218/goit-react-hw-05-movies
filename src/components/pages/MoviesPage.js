import React from 'react';
import { Link } from 'react-router-dom';
import { useMoviePageLogic } from 'MovieSearchLogic/MovieSearch';

import {
  WraperContainer,
  SearchInput,
  Search,
  BntSearch,
} from 'components/PageStyle/Search.style';

const MoviePage = () => {
  const { query, movies, handleInputChange, handleSearch } =
    useMoviePageLogic();

  return (
    <WraperContainer>
      <Search>
        <SearchInput
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter movie title..."
        />
      </Search>
      <BntSearch onClick={handleSearch}>Search</BntSearch>
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
    </WraperContainer>
  );
};

export default MoviePage;

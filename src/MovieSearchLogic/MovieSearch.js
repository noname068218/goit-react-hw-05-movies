import { useState, useEffect, useCallback, useRef } from 'react';
import { fetchMoviesByQuery } from 'components/Api/api';
import { useSearchParams } from 'react-router-dom';

export const useMoviePageLogic = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movies, setMovies] = useState([]);

  const handleSearch = useCallback(async () => {
    try {
      const fetchedMovies = await fetchMoviesByQuery(query);
      setMovies(fetchedMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }, [query]);
  const handleSearchRef = useRef(handleSearch);
  useEffect(() => {
    handleSearchRef.current();
  }, []);

  const handleInputChange = e => {
    setSearchParams({ query: e.target.value });
  };

  return {
    query,
    movies,
    handleInputChange,
    handleSearch,
  };
};

import { useState, useEffect, useCallback } from 'react';
import { fetchMoviesByQuery } from 'Services/api';
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

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.trim().toLowerCase();
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (!query) return;
    handleSearch();
  }, [query, handleSearch]);

  return {
    query,
    movies,
    handleSubmit,
  };
};

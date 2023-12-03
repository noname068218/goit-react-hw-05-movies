// HomePageLogic.js
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../Api/api';

export const useHomePageLogic = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setisLoading(true);

        const fetchedHome = await fetchTrendingMovies();

        setTrendingMovies(fetchedHome);
      } catch (error) {
        console.error('Error', error);
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, []);

  const uniqueMovies = Array.from(
    new Set(trendingMovies.map(movie => movie.id))
  );

  return { trendingMovies, isLoading, uniqueMovies };
};

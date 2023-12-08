import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../Services/api';

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
  return { trendingMovies, isLoading };
};

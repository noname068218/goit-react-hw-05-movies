import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchActors,
  fetchMovieDetailsById,
  fetchTrendingMovies,
  fetchReviews,
} from 'components/Api/api';

export const useDataFetching = dataType => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        switch (dataType) {
          case 'actors':
            const fetchedActors = await fetchActors(movieId);
            setData(fetchedActors);
            break;
          case 'movieDetails':
            const fetchedMovieDetails = await fetchMovieDetailsById(movieId);
            setData(fetchedMovieDetails);
            break;
          case 'trendingMovies':
            const fetchedTrendingMovies = await fetchTrendingMovies();
            setData(fetchedTrendingMovies);
            break;
          case 'reviews':
            const fetchedReviews = await fetchReviews(movieId);
            setData(fetchedReviews);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error('Error', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId, dataType]);

  return { data, isLoading };
};

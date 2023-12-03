import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailsById } from 'components/Api/api';

export const MovieDetailsLogic = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const movieDataDetails = async () => {
      try {
        setIsLoading(true);

        const movieDetailsResponse = await fetchMovieDetailsById(movieId);
        setMovieDetails(movieDetailsResponse);
      } catch (error) {
        console.error('Error', error);
      } finally {
        setIsLoading(false);
      }
    };

    movieDataDetails();
  }, [movieId]);

  return { isLoading, movieDetails };
};

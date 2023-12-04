import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'components/Api/api';

export const useCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const castDescription = async () => {
      try {
        setIsLoading(true);

        const fetchedDescription = await fetchActors(movieId);
        console.log(fetchedDescription);

        setCast(fetchedDescription);
      } catch (error) {
        console.error('Error', error);
      } finally {
        setIsLoading(false);
      }
    };

    castDescription();
  }, [movieId]);

  return { cast, isLoading };
};

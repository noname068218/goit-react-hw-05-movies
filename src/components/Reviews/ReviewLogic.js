import { useEffect, useState } from 'react';
import { fetchReviews } from 'components/Api/api';
import { useParams } from 'react-router-dom';

export const useReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        setIsLoading(true);

        const fetchedReviews = await fetchReviews(movieId);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error('Error fetching reviews', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviewsData();
  }, [movieId]);

  return { reviews, isLoading };
};

import { useReviews } from 'components/Reviews/ReviewLogic';

export default function Reviews() {
  const { isLoading, reviews } = useReviews();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

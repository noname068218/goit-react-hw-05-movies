import { useDataFetching } from 'components/hooks';
export default function Reviews() {
  const { data: reviews, isLoading } = useDataFetching('reviews');

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

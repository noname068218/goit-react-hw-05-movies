import { useDataFetching } from 'hooks/useDataFetching';
import {
  Card,
  MainText,
  DescriptionText,
} from 'pages/ReviewsPage/ReviewsStyle';

export default function Reviews() {
  const { data: reviews, isLoading } = useDataFetching('reviews');

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : reviews && reviews.length > 0 ? (
        <Card>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <MainText>{review.author}</MainText>
                <DescriptionText>{review.content}</DescriptionText>
              </li>
            ))}
          </ul>
        </Card>
      ) : (
        <DescriptionText>No reviews</DescriptionText>
      )}
    </div>
  );
}

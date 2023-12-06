import { Link } from 'react-router-dom';
import { useHomePageLogic } from 'components/HomePage/HomeLogic';
import {
  Card,
  Container,
  ImageCard,
  List,
  Listli,
  CardBack,
  CardFront,
  Overlay,
} from 'components/HomePage/Home.style';

export default function HomePage() {
  const { trendingMovies, isLoading, uniqueMovies } = useHomePageLogic();

  return (
    <List>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        uniqueMovies.map((movieId, index) => {
          const movie = trendingMovies.find(movie => movie.id === movieId);

          return (
            <Listli key={index}>
              <Card>
                <Container>
                  <CardBack>
                    <Link to={`/movies/${movie.id}`} state={{ from: '/' }}>
                      {movie.backdrop_path ? (
                        <ImageCard
                          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                          alt={movie.title}
                        />
                      ) : (
                        <span>No Image Available</span>
                      )}
                      <Overlay />
                      <CardFront>{movie.title}</CardFront>
                    </Link>
                  </CardBack>
                </Container>
              </Card>
            </Listli>
          );
        })
      )}
    </List>
  );
}

import { Link, useLocation } from 'react-router-dom';

import {
  Card,
  Container,
  ImageCard,
  List,
  Listli,
  CardBack,
  CardFront,
  Overlay,
} from 'pages/HomePage/Home.style';
import noImage from './picture.png';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => {
        return (
          <Listli key={movie.id}>
            <Card>
              <Container>
                <CardBack>
                  <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                    {movie.backdrop_path ? (
                      <ImageCard
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.title}
                      />
                    ) : (
                      <ImageCard src={noImage} alt="noimage" />
                    )}
                    <Overlay />
                    <CardFront>{movie.title}</CardFront>
                  </Link>
                </CardBack>
              </Container>
            </Card>
          </Listli>
        );
      })}
    </List>
  );
};

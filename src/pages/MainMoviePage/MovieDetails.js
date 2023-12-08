import { Link, Outlet, useLocation } from 'react-router-dom';
import { Loader } from '../../components/Animations/LoadingSpiner';
import { useDataFetching } from 'hooks/useDataFetching';
import {
  Card,
  CardLeft,
  CardRight,
  Gener,
  TextGenerContainer,
  ListItem,
  ListContainer,
  List,
  HomeBtn,
  LinkBtn,
} from 'pages/MainMoviePage/MovieDetails.style';
import { useRef } from 'react';

const MovieDetails = () => {
  const { data: movieDetails, isLoading: isMovieDetailsLoading } =
    useDataFetching('movieDetails');
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  return (
    <div>
      {isMovieDetailsLoading ? (
        <Loader />
      ) : (
        <div>
          <Link to={backLinkRef.current}>
            <HomeBtn>Go Home</HomeBtn>
          </Link>
          <Card>
            <CardLeft>
              {movieDetails.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
                  alt={movieDetails.title}
                />
              ) : (
                <span>No Image Available</span>
              )}
            </CardLeft>
            <CardRight>
              <h2>{movieDetails.title}</h2>
              <p>{movieDetails.overview}</p>

              <Gener>Gener</Gener>
              <TextGenerContainer>
                {movieDetails.genres &&
                  movieDetails.genres.map(gener => (
                    <p key={gener.id}>{gener.name}</p>
                  ))}
              </TextGenerContainer>
            </CardRight>
          </Card>
        </div>
      )}

      <div>
        <ListContainer>
          <List>
            <ListItem>
              <LinkBtn to="cast">Cast</LinkBtn>
            </ListItem>
            <ListItem>
              <LinkBtn to="reviews">Reviews</LinkBtn>
            </ListItem>
          </List>
        </ListContainer>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;

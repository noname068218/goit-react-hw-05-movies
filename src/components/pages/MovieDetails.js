import { Link, Outlet, useLocation } from 'react-router-dom';
import { Loader } from '../Animations/LoadingSpiner';
import { useDataFetching } from 'components/hooks';
import { FilmCard } from 'components/MovieDetalis/MovieDetails.style';
import { useRef } from 'react';

const MovieDetails = () => {
  const { data: movieDetails, isLoading: isMovieDetailsLoading } =
    useDataFetching('movieDetails');
  const location = useLocation();
  const backLinkRef = useRef(location);
  return (
    <div>
      {isMovieDetailsLoading ? (
        <Loader />
      ) : (
        <div>
          <Link to={backLinkRef.current.state?.from ?? '/'}>
            <button>Go Home</button>
          </Link>

          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
          <h2>Gener</h2>
          {movieDetails.genres &&
            movieDetails.genres.map(gener => (
              <p key={gener.id}>{gener.name}</p>
            ))}
          {movieDetails.backdrop_path ? (
            <FilmCard
              src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
              alt={movieDetails.title}
            />
          ) : (
            <span>No Image Available</span>
          )}

          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;

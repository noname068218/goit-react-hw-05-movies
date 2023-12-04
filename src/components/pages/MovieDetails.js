import { Link, Outlet } from 'react-router-dom';
import { Loader } from '../Animations/LoadingSpiner';
import { useDataFetching } from 'components/hooks';
import { FilmCard } from 'components/MovieDetalis/MovieDetails.style';

const MovieDetails = () => {
  const { data: movieDetails, isLoading: isMovieDetailsLoading } =
    useDataFetching('movieDetails');

  return (
    <div>
      {isMovieDetailsLoading ? (
        <Loader />
      ) : (
        <div>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
          <h2>Gener</h2>
          {movieDetails.genres &&
            movieDetails.genres.map(gener => (
              <p key={gener.id}>{gener.name}</p>
            ))}
          <FilmCard
            src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
            alt={movieDetails.title}
          />
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

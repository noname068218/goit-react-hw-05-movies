import { useHomePageLogic } from 'components/HomePage/HomeLogic';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { trendingMovies, isLoading, uniqueMovies } = useHomePageLogic();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {uniqueMovies.map((movieId, index) => {
            const movie = trendingMovies.find(movie => movie.id === movieId);

            return (
              <li key={index}>
                <Link to={`/movies/${movie.id}`} state={{ from: '/' }}>
                  {movie.backdrop_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt={movie.title}
                    />
                  ) : (
                    <span>No Image Available</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

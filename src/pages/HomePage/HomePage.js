import { useHomePageLogic } from 'hooks/useHomePageLogic';
import { MovieList } from 'components/Animations/MoviesList';

export default function HomePage() {
  const { trendingMovies, isLoading } = useHomePageLogic();

  return (
    <div>
      {isLoading && <p>Loading...</p>}{' '}
      {!isLoading && <MovieList movies={trendingMovies} />}
    </div>
  );
}

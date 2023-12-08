import { Route, Routes } from 'react-router-dom';
import { AppLayout } from 'AppLayout';
import { lazy } from 'react';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('./pages/MoviePage/MoviesPage'));
const MovieDetails = lazy(() =>
  import('./pages/MainMoviePage/MovieDetails.js')
);
const Cast = lazy(() => import('./pages/CastLink/Cast'));
const Reviews = lazy(() => import('./pages/ReviewsPage/Reviews'));
const NotFound = lazy(() => import('./pages/NotFound.js'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />

        <Route path="movies" element={<MoviePage />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

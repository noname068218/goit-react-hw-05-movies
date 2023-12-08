import React from 'react';
import { useMoviePageLogic } from 'hooks/useMoviePageLogic';
import {
  WraperContainer,
  SearchInput,
  Search,
  BntSearch,
  Conein,
  MainBackground,
  VideoFrame,
  OverlayVideo,
} from 'pages/MoviePage/Search.style';
import { MovieList } from 'components/Animations/MoviesList';

const MoviePage = () => {
  const { query, movies, handleSubmit } = useMoviePageLogic();

  return (
    <MainBackground>
      <WraperContainer>
        <VideoFrame autoPlay loop muted>
          <source
            type="video/mp4"
            src="https://static.pexels.com/lib/videos/free-videos.mp4"
          />
        </VideoFrame>
        <OverlayVideo />
        <Conein>
          <form onSubmit={handleSubmit}>
            <Search>
              <SearchInput
                defaultValue={query}
                type="text"
                name={'query'}
                placeholder="Enter movie title..."
              />
            </Search>
            <BntSearch type="submit">Search</BntSearch>
          </form>
          <MovieList movies={movies} />
        </Conein>
      </WraperContainer>
    </MainBackground>
  );
};

export default MoviePage;

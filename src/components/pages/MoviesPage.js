import React from 'react';
import { useMoviePageLogic } from 'MovieSearchLogic/MovieSearch';
import {
  WraperContainer,
  SearchInput,
  Search,
  BntSearch,
  ImageCard,
  List,
  Listli,
  LinkPoster,
  Card,
  Container,
  CardBack,
  CardFront,
  Overlay,
  Conein,
  MainBackground,
  VideoFrame,
  OverlayVideo,
} from 'components/PageStyle/Search.style';
import NoImage from '../No-picture.png';

const MoviePage = () => {
  const { query, movies, handleInputChange, handleSearch } =
    useMoviePageLogic();

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
          <Search>
            <SearchInput
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Enter movie title..."
            />
          </Search>
          <BntSearch onClick={handleSearch}>Search</BntSearch>

          <List>
            {movies.map(movie => (
              <Listli key={movie.id}>
                <Card>
                  <Container>
                    <CardBack>
                      <LinkPoster
                        to={`/movies/${movie.id}`}
                        state={{ from: '/movies?query=' + query }}
                      >
                        {movie.backdrop_path ? (
                          <ImageCard
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title}
                          />
                        ) : (
                          <ImageCard src={NoImage} alt="not available" />
                        )}
                        <Overlay />
                        <CardFront>{movie.title}</CardFront>
                      </LinkPoster>
                    </CardBack>
                  </Container>
                </Card>
              </Listli>
            ))}
          </List>
        </Conein>
      </WraperContainer>
    </MainBackground>
  );
};

export default MoviePage;

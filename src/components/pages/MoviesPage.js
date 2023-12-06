import React from 'react';
import { Link } from 'react-router-dom';
import { useMoviePageLogic } from 'MovieSearchLogic/MovieSearch';
import {
  WraperContainer,
  SearchInput,
  Search,
  BntSearch,
  ImageCard,
  List,
  Listli,
  ContainerListImage,
  Container,
} from 'components/PageStyle/Search.style';
import NoImage from '../No-picture.png';

const MoviePage = () => {
  const { query, movies, handleInputChange, handleSearch } =
    useMoviePageLogic();

  return (
    <WraperContainer>
      <Search>
        <SearchInput
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter movie title..."
        />
      </Search>
      <BntSearch onClick={handleSearch}>Search</BntSearch>
      <ContainerListImage>
        <List>
          <Container>
            {movies.map(movie => (
              <Listli key={movie.id}>
                <Link
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
                </Link>
              </Listli>
            ))}
          </Container>
        </List>
      </ContainerListImage>
    </WraperContainer>
  );
};

export default MoviePage;

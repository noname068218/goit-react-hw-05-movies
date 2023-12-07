import { useDataFetching } from 'components/hooks';
import {
  Listli,
  Card,
  Container,
  CardBack,
  ImageCard,
  CardFront,
  Overlay,
  List,
} from 'components/AllStyle/cast.style';
import NoImage from '../No-picture.png';
export default function Cast() {
  const { data: cast, isLoading: isCastLoading } = useDataFetching('actors');
  return (
    <div>
      {isCastLoading ? (
        <p>Loading...</p>
      ) : (
        <List>
          {cast.map(casts => (
            <Listli key={casts.id}>
              <Card>
                <Container>
                  <CardBack>
                    {casts.profile_path ? (
                      <ImageCard
                        src={`https://image.tmdb.org/t/p/w300${casts.profile_path}`}
                        alt={casts.name}
                      />
                    ) : (
                      <ImageCard src={NoImage} alt="not available" />
                    )}
                    <Overlay />
                    <CardFront>{casts.character}</CardFront>
                  </CardBack>
                </Container>
              </Card>
            </Listli>
          ))}
        </List>
      )}
    </div>
  );
}

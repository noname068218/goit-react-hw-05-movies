import { useCast } from 'components/Cast/CastLogic';

export default function Cast() {
  const { isLoading, cast } = useCast();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cast.map(casts => (
            <li key={casts.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${casts.profile_path}`}
                alt={casts.name}
              />
              <p>{casts.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

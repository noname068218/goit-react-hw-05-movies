import { useDataFetching } from 'components/hooks';
export default function Cast() {
  const { data: cast, isLoading: isCastLoading } = useDataFetching('actors');
  return (
    <div>
      {isCastLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cast.map(casts => (
            <li key={casts.id}>
              {casts.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${casts.profile_path}`}
                  alt={casts.name}
                />
              ) : (
                <span>No Image Available</span>
              )}
              <p>{casts.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// import {
//   ImageCard,
//   List,
//   Listli,
//   LinkPoster,
//   Card,
//   Container,
//   CardBack,
//   CardFront,
//   Overlay,
// } from 'pages/MoviePage/Search.style';
// import NoImage from '../No-picture.png';

// export const MovieListPage = ({ movies }) => {
//   <List>
//     {movies.map(movie => (
//       <Listli key={movie.id}>
//         <Card>
//           <Container>
//             <CardBack>
//               <LinkPoster
//                 to={`/movies/${movie.id}`}
//                 state={{ from: '/movies?query=' + query }}
//               >
//                 {movie.backdrop_path ? (
//                   <ImageCard
//                     src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//                     alt={movie.title}
//                   />
//                 ) : (
//                   <ImageCard src={NoImage} alt="not available" />
//                 )}
//                 <Overlay />
//                 <CardFront>{movie.title}</CardFront>
//               </LinkPoster>
//             </CardBack>
//           </Container>
//         </Card>
//       </Listli>
//     ))}
//   </List>;
// };

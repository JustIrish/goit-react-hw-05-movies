import toast from 'react-hot-toast';
import { getMovieById } from 'getMoviesApi';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from 'components/Loader/Loader';
import {
  BackdropImg,
  CardMovie,
  PosterImage,
  MovieInfo,
  AddInfo,
  StyledLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMovieById(movieId)
      .then(data => setMovie(data))
      .catch(error => {
        console.log(`${error.name}: ${error.message}`);
        toast.error('Sorry, something went wrong...');
      });
  }, [movieId]);

  if (!movie) return;
  const { backdrop_path, poster_path, title, vote_average, overview, genres } =
    movie;

  return (
    <main>
      <BackdropImg
        backdrop={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
      >
        <BackLink to={backLinkHref}>Go back</BackLink>
        <CardMovie>
          <PosterImage
            src={
              poster_path
                ? `${IMG_URL}${poster_path}`
                : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg'
            }
            alt={title}
            loading="lazy"
          />
          <MovieInfo>
            <h2>{title}</h2>
            <p>User Score: {Math.round(vote_average * 10)}%</p>
            <h3>Owerview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres ? genres.map(genre => genre.name).join(', ') : ''}</p>
          </MovieInfo>
        </CardMovie>
        <AddInfo>
          <h3>Additional information</h3>
          <ul>
            <li>
              <StyledLink to={'cast'} state={{ from: backLinkHref }}>
                Cast
              </StyledLink>
            </li>
            <li>
              <StyledLink to={'reviews'} state={{ from: backLinkHref }}>
                Reviews
              </StyledLink>
            </li>
          </ul>
        </AddInfo>
      </BackdropImg>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;

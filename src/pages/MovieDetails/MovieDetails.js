import toast from 'react-hot-toast';
import { getMovieById } from 'getMoviesApi';
import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import {
  BackdropImg,
  CardMovie,
  PosterImage,
  MovieInfo,
  AddInfo,
  StyledLink,
} from './MovieDetails.styled';

export const MovieDetails = () => {
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
            src={`${IMG_URL}${poster_path}`}
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
              <StyledLink to={'cast'}>Cast</StyledLink>
            </li>
            <li>
              <StyledLink to={'reviews'}>Reviews</StyledLink>
            </li>
          </ul>
        </AddInfo>
      </BackdropImg>
      <Outlet />
    </main>
  );
};

import { getMovieById } from 'getMoviesApi';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import {
  BackdropImg,
  CardMovie,
  PosterImage,
  MovieInfo,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMovieById(movieId).then(data => setMovie(data));
  }, [movieId]);

  if (!movie) return;
  const { backdrop_path, poster_path, title, vote_average, overview, genres } =
    movie;

  return (
    <main>
      <BackdropImg
        backdrop={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
      >
        <CardMovie>
          <PosterImage
            src={`${IMG_URL}${poster_path}`}
            alt={title}
            loading="lazy"
          />
          <MovieInfo>
            <h2>{title}</h2>
            <p>User Score:{vote_average}%</p>
            <h3>Owerview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres ? genres.map(genre => genre.name).join(', ') : ''}</p>
          </MovieInfo>
        </CardMovie>
      </BackdropImg>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={'cast'}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={'reviews'}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};

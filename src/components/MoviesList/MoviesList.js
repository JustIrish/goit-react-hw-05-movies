import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import { List, ListItem, PosterImg, MovieTitle } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <ListItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <PosterImg
              src={`${IMG_URL}${poster_path}`}
              alt={title}
              loading="lazy"
            />
            <MovieTitle>{title}</MovieTitle>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

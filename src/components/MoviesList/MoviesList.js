import { Link } from 'react-router-dom';
import { List, ListItem, PosterImg, MovieTitle } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <ListItem key={id}>
          <Link to={`movies/${id}`}>
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

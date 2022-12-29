import toast from 'react-hot-toast';
import { getCastById } from 'getMoviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListWrap, CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getCastById(movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => {
        console.log(`${error.name}: ${error.message}`);
        toast.error('Sorry, something went wrong...');
      });
  }, [movieId]);

  if (!cast) return;

  return (
    <ListWrap>
      <CastList>
        {cast.map(({ id, profile_path, name, character }) => (
          <CastItem key={id}>
            <img
              src={
                profile_path
                  ? `${IMG_URL}${profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png'
              }
              alt={name}
              width={120}
            />
            <b>{name}</b>
            <p>Character: {character}</p>
          </CastItem>
        ))}
      </CastList>
      {cast.length === 0 && <p>No cast found for this movie.</p>}
    </ListWrap>
  );
};

export default Cast;

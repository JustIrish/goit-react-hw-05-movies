import toast from 'react-hot-toast';
import { getReviews } from 'getMoviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListWrap, List } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => {
        console.log(`${error.name}: ${error.message}`);
        toast.error('Sorry, something went wrong...');
      });
  }, [movieId]);

  if (!reviews) return;
  if (reviews.length === 0)
    return <p>We don't have any reviews for this movie.</p>;

  return (
    <ListWrap>
      <List>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <b>Author: {author}</b>
            <p>{content}</p>
          </li>
        ))}
      </List>
    </ListWrap>
  );
};

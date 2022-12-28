import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getTrending } from 'getMoviesApi';
import { HomeTitle } from './Home.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending()
      .then(data => setTrending(data.results))
      .catch(error => {
        console.log(`${error.name}: ${error.message}`);
        toast.error('Sorry, something went wrong...');
      });
  }, []);

  return (
    <main>
      <HomeTitle>Trending today</HomeTitle>
      {trending.length > 0 && <MoviesList movies={trending} />}
    </main>
  );
};

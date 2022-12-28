import toast from 'react-hot-toast';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'getMoviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') return setMovie([]);

    getSearchMovies(searchQuery)
      .then(data => {
        if (data.results.length === 0) {
          toast.error(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
        console.log(data);
        setMovie(data.results);
      })
      .catch(error => {
        console.log(`${error.name}: ${error.message}`);
        toast.error('Sorry, something went wrong...');
      });
  }, [searchQuery]);

  const changeQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main>
      <SearchBar onSubmit={changeQuery} />
      <MoviesList movies={movie} />
    </main>
  );
};

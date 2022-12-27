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

    getSearchMovies(searchQuery).then(res => {
      console.log(res);
      setMovie(res.results);
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

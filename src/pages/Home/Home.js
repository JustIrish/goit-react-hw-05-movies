import { useState, useEffect } from 'react';
import { getTrending } from 'getMoviesApi';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getTrending().then(data => setTrending(data.results));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {trending.length > 0 && (
        <ul>
          {trending.map(({ id, title, poster_path }) => (
            <li key={id}>
              <Link to={id}>
                <img
                  src={`${IMG_URL}${poster_path}`}
                  alt={title}
                  loading="lazy"
                />
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

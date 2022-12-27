import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '12c5bb7038d66843aec293c82a0d8d17';
const params = new URLSearchParams({
  api_key: API_KEY,
});

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?${params}`);
  return response.data;
};

export const getMovieById = async movieId => {
  const response = await axios.get(`movie/${movieId}?${params}`);
  return response.data;
};

export const getSearchMovies = async query => {
  const response = await axios.get(`search/movie?${params}&query=${query}`);
  return response.data;
};

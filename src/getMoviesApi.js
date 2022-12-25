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

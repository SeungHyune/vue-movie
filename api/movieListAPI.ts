import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Movie } from '../src/types/MovieTypes';
import axios from 'axios';

const { API_KEY } = process.env;

export default async function (req: VercelRequest, res: VercelResponse) {
  console.log(API_KEY);
  const { title, page } = req.query;
  const response: Movie = await axios
    .get(`https://omdbapi.com/?apikey=${API_KEY}&s=${title}&page=${page}`)
    .then((res) => res.data);
  res.status(200).json(response);
}

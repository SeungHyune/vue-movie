import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Movie } from '../src/types/MovieTypes';
import axios from 'axios';

const { API_KEY } = process.env;

export default async function (req: VercelRequest, res: VercelResponse) {
  const { title, page } = req.query;
  const response = await axios.get(
    `https://omdbapi.com/?apikey=${API_KEY}&s=${title}&page=${page}`
  );

  const result: Movie = await response.data;
  res.status(200).json(result);
}

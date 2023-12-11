import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MovieInfo } from '../src/types/MovieTypes';
import axios from 'axios';

const { API_KEY } = process.env;

export default async function (req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;
  const response = await axios.get(
    `https://omdbapi.com?apikey=${API_KEY}&i=${id}&plot=full`
  );

  const result: MovieInfo = await response.data;
  res.status(200).json(result);
}

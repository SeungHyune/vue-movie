import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MovieInfo } from '../src/Types/MovieTypes';
import axios from 'axios';

const { API_KEY } = process.env;

export default async function (req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;
  const response: MovieInfo = await axios
    .get(`https://omdbapi.com?apikey=${API_KEY}&i=${id}&plot=full`)
    .then((res) => res.data);

  res.status(200).json(response);
}

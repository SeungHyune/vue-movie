import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Movie, MovieInfo } from '../src/types/MovieTypes';
import axios from 'axios';

const { API_KEY } = process.env;

export default async function (req: VercelRequest, res: VercelResponse) {
  const { title, page, id } = req.query;

  const response = id
    ? await axios.get(`https://omdbapi.com?apikey=${API_KEY}&i=${id}&plot=full`)
    : await axios.get(
        `https://omdbapi.com?apikey=${API_KEY}&s=${title}&page=${page}`
      );

  const result: Movie | MovieInfo = await response.data;
  res.status(200).json(result);
}

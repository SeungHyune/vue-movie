export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
export type Movies = Movie[];

export interface MovieSearchList {
  Search: Movies;
  totalResults: string;
  Response: string;
}

export type MovieViewData = Pick<
  MovieViewResponse,
  'Title' | 'Poster' | 'Director' | 'Actors' | 'Released' | 'Plot' | 'Ratings'
>;

export interface MovieViewResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

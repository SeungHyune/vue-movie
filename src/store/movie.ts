import { defineStore } from 'pinia';
import { Movies, MovieSearchList, MovieInfo } from '/src/types/MovieTypes.ts';
import axios from 'axios';

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Movies,
    movieInfo: {} as MovieInfo,
    title: '' as string,
    page: 1 as number,
    totalMovies: 0 as number,
    totalResults: 0 as number,
    isModal: false as boolean,
    isLoading: false as boolean
  }),
  actions: {
    async fetchNewMovie(title: string) {
      if (this.isLoading) return;
      this.isLoading = true;

      try {
        this.title = title;
        this.totalMovies = 0;
        this.totalResults = 0;
        this.page = 1;
        this.isModal = false;
        this.movies = [];

        const response: MovieSearchList = await axios
          .get('/api/movieListAPI', {
            params: { title: this.title, page: this.page }
          })
          .then((res) => res.data);

        const { Search, totalResults } = response;
        if (Search) {
          this.movies = Search;
          this.totalResults = Number(totalResults);
          this.isModal = false;
          this.totalMovies += Search.length;
        } else {
          this.movies = Search;
          this.isModal = true;
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchNextMovie(page: number) {
      if (this.isLoading) return;
      this.isLoading = true;

      try {
        if (this.totalResults > this.totalMovies) {
          const response: MovieSearchList = await axios
            .get('/api/movieListAPI', {
              params: { title: this.title, page: this.page }
            })
            .then((res) => res.data);

          const { Search } = response;
          this.movies = [...this.movies, ...Search];
          this.totalMovies += Search.length;
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchViewMovie(id: string) {
      this.isLoading = true;
      try {
        const response: MovieInfo = await axios
          .get('/api/movieViewAPI', { params: { id } })
          .then((res) => res.data);
        this.movieInfo = response;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    }
  }
});
import { defineStore } from 'pinia';
import { Movies, MovieInfo } from '../types/MovieTypes';
import axios from 'axios';

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Movies,
    movieInfo: {} as MovieInfo,
    title: '',
    page: 1,
    totalResults: 0,
    isLoading: false
  }),
  actions: {
    async fetchMoviesListData(title?: string) {
      if (this.isLoading) return;

      if (this.movies.length === 0) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
      }

      try {
        if (
          this.movies.length === 0 ||
          this.totalResults > this.movies.length
        ) {
          if (title) this.title = title;

          const response = await axios.get('/api/moviesAPI', {
            params: { title: this.title, page: this.page }
          });

          const { data } = response;
          const { Search, totalResults } = data;

          if (Search) {
            this.movies = [...this.movies, ...Search];
            this.totalResults = totalResults;
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchMovieViewData(id: string) {
      this.isLoading = true;
      this.movieInfo = {} as MovieInfo;

      try {
        const response = await axios.get('/api/moviesAPI', {
          params: { id }
        });

        const { data } = response;
        this.movieInfo = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    }
  }
});

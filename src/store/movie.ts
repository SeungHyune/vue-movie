import { defineStore } from 'pinia';
import { Movies, MovieSearchList, MovieInfo } from '../types/MovieTypes';
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
    async fetchSearchMovie(title: string) {
      if (this.isLoading) return;
      this.isLoading = true;

      try {
        this.title = title;

        const response = await axios.get('/api/movieListAPI', {
          params: { title: this.title, page: this.page }
        });

        const { data } = response;
        const { Search, totalResults } = data;

        if (Search) {
          this.movies = Search;
          this.totalResults = Number(totalResults);
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchNextMovie(page: number) {
      if (this.isLoading) return;

      try {
        if (this.totalResults > this.movies.length) {
          const response = await axios.get('/api/movieListAPI', {
            params: { title: this.title, page }
          });

          const { data } = response;
          const { Search } = data;
          this.movies = [...this.movies, ...Search];
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchMovieViewPage(id: string) {
      this.isLoading = true;
      this.movieInfo = {} as MovieInfo;

      try {
        const response = await axios.get('/api/movieViewAPI', {
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

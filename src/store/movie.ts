import { defineStore } from 'pinia';
import { Movies, MovieViewData, MovieSearchList } from '../types/MovieTypes';
import axios, { AxiosResponse } from 'axios';
import { getItem, setItem } from '../utils/storage';

const THEME_STORAGE_KEY = 'theme';

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Movies,
    movieInfo: {} as MovieViewData,
    title: '',
    page: 1,
    totalResults: 0,
    isLoading: false,
    isTheme: getItem(THEME_STORAGE_KEY, false)
  }),
  actions: {
    themeChange() {
      this.isTheme = !this.isTheme;
      setItem(THEME_STORAGE_KEY, this.isTheme);
      document.body.classList.toggle('dark');
    },
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

          const { data }: AxiosResponse<MovieSearchList> = response;
          const { Search, totalResults } = data;

          if (Search) {
            this.movies = [...this.movies, ...Search];
            this.totalResults = Number(totalResults);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchMovieViewData(id: string) {
      this.isLoading = true;
      this.movieInfo = {} as MovieViewData;

      try {
        const response = await axios.get('/api/moviesAPI', {
          params: { id }
        });

        const { data }: AxiosResponse<MovieViewData> = response;

        this.movieInfo = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    }
  }
});

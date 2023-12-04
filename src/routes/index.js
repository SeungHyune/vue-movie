import { createRouter, createWebHistory } from 'vue-router';
import MovieHome from '/src/components/movies/MovieHome.vue';
import MovieListPage from '/src/components/movies/MovieListPage.vue';
import MovieViewPage from '/src/components/movies/MovieViewPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MovieHome
    },
    {
      name: 'movieList',
      path: '/movieList/:title',
      component: MovieListPage
    },
    {
      name: 'movieView',
      path: '/movieView/:id',
      component: MovieViewPage
    }
  ]
});

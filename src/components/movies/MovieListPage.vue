<template>
  <TheLoader />
  <ul
    v-if="!movieStore.isModal"
    class="movielist-ul">
    <MovieListItem />
  </ul>
  <Btn
    v-if="movieStore.totalResults > movieStore.totalMovies"
    title="More"
    @click="fetchNextMovie" />
  <div
    v-else
    class="not-found-modal">
    찾는 검색 결과가 없습니다.
  </div>
</template>

<script setup lang="ts">
import MovieListItem from '../movies/MovieListItem.vue';
import Btn from '../common/Btn.vue';
import { useMovieStore } from '../../store/movie';
import router from '../../routes/index';
import TheLoader from '../common/TheLoader.vue';

const movieStore = useMovieStore();
const movieId = router.currentRoute.value.params.title;
function fetchNextMovie() {
  movieStore.page = movieStore.page + 1;
  movieStore.fetchNextMovie(movieStore.page);
}

if (typeof movieId === 'string') {
  movieStore.fetchNewMovie(movieId);
}
</script>

<style lang="scss" scoped>
.movielist-ul {
  max-width: 1400px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
}

.not-found-modal {
  text-align: center;
  margin-top: 60px;
  padding: 20px 0;
}
</style>

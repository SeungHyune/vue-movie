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
import { computed } from 'vue';
import MovieListItem from '/src/components/movies/MovieListItem.vue';
import Btn from '/src/components/common/Btn.vue';
import { useMovieStore } from '/src/store/movie.ts';
import router from '/src/routes/index.js';
import TheLoader from '/src/components/common/TheLoader.vue';

const movieStore = useMovieStore();

function fetchNextMovie() {
  movieStore.page = movieStore.page + 1;
  movieStore.fetchNextMovie(movieStore.page);
}

movieStore.fetchNewMovie(router.currentRoute._value.params.title);
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

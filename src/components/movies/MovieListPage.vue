<template>
  <div class="movielist-box">
    <TheLoader />
    <ul
      v-if="!movieStore.isModal"
      class="movielist-ul">
      <MovieListItem />
    </ul>
    <div
      v-else
      class="not-found-modal">
      찾는 검색 결과가 없습니다.
    </div>
    <div
      ref="observerDiv"
      class="observer-div"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MovieListItem from '../movies/MovieListItem.vue';
import TheLoader from '../common/TheLoader.vue';
import { useMovieStore } from '../../store/movie';
import router from '../../routes/index';

const movieStore = useMovieStore();
const movieId = router.currentRoute.value.params.title;
const observerDiv = ref<null | HTMLElement>(null);

function fetchNextMovie() {
  movieStore.page = movieStore.page + 1;
  movieStore.fetchNextMovie(movieStore.page);
}

const observer = new IntersectionObserver(
  (entry) => {
    if (entry[0].isIntersecting) {
      console.log('화면 끝');
      if (movieStore.isScollCount === 0 && typeof movieId === 'string') {
        movieStore.fetchNewMovie(movieId);
        movieStore.isScollCount += 1;
      } else if (movieStore.totalResults > movieStore.totalMovies) {
        fetchNextMovie();
      }
    }
  },
  {
    threshold: 1
  }
);

onMounted(() => {
  if (observerDiv.value) {
    observer.observe(observerDiv.value);
  }
});
</script>

<style lang="scss" scoped>
.movielist-box {
  position: relative;
  min-height: 300px;
}
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

.observer-div {
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 200px;
}
</style>

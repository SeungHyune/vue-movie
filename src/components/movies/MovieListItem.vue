<template>
  <li
    v-for="movie in movieStore.movies"
    :key="movie.imdbID"
    @click="fetchViewPage(movie.imdbID)">
    <div class="movie-img">
      <img
        :src="
          movie.Poster === 'N/A' ? '/src/images/temporary.jpg' : movie.Poster
        " />
    </div>
    <div class="movie-info">
      <strong>{{ movie.Title }}</strong>
      <span>{{ movie.Year }}</span>
    </div>
  </li>
</template>

<script setup lang="ts">
import { useMovieStore } from '../../store/movie';
import router from '../../routes/index';

const movieStore = useMovieStore();

async function fetchViewPage(id: string) {
  router.push({
    name: 'movieView',
    params: {
      id
    }
  });
}
</script>

<style lang="scss" scoped>
.movielist-ul {
  li {
    text-align: center;
    cursor: pointer;

    &:hover {
      .movie-img {
        img {
          transform: scale(1.02);
        }
      }
    }
    .movie-img {
      margin-bottom: 10px;
      height: calc(100% - 60px);
      overflow: hidden;

      img {
        max-width: 100%;
        height: 100%;
        transition: transform 0.3s;
      }
    }

    .movie-info {
      strong {
        display: -webkit-box;
        font-weight: 600;
        margin-bottom: 10px;
        white-space: normal;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        padding: 2px 0;
        line-height: 1.2;
      }
    }
  }
}
</style>

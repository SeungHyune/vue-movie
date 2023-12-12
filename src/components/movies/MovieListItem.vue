<template>
  <li
    v-for="movie in movieStore.movies"
    :key="movie.imdbID"
    @click="fetchViewPage(movie.imdbID)">
    <div class="movie-img">
      <img
        :src="
          movie.Poster === 'N/A'
            ? emptyImage
            : ImageResize(movie.Poster, 'SX300', 'SX700')
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
import { ImageResize } from '../../utils/imageResize';

const movieStore = useMovieStore();
const emptyImage = `https://placehold.co/250x330?text=No+Image`;

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
    position: relative;

    &:hover {
      .movie-img {
        &:after {
          position: absolute;
          left: 0;
          top: 0;
          background-color: rgba(0, 0, 0, 0.6);
          content: '';
          width: 100%;
          height: 100%;
        }

        img {
          transform: scale(1.02);
        }
      }

      .movie-info {
        opacity: 1;
      }
    }
    .movie-img {
      position: relative;
      height: 100%;
      overflow: hidden;
      border-radius: 8px;
      box-shadow:
        rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

      img {
        max-width: 100%;
        height: 100%;
        transition: transform 0.3s;
        object-fit: cover;
      }
    }

    .movie-info {
      position: absolute;
      width: calc(100% - 30px);
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all 0.3s;
      color: #fff;

      strong {
        display: -webkit-box;
        font-weight: 600;
        margin-bottom: 10px;
        white-space: normal;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        padding: 2px 0;
        line-height: 1.2;
        font-size: 20px;
      }
    }
  }
}
</style>

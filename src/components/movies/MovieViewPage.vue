<template>
  <div
    v-if="movieStore.movieInfo.Title"
    class="movie-view-page">
    <div
      :style="{
        backgroundImage: `url(${imageResize(
          movieStore.movieInfo.Poster,
          'SX300',
          'SX700'
        )})`
      }"
      class="movie-sub-page"></div>
    <div class="movie-viewer">
      <div class="movie-img">
        <img
          :src="
            imageUrlChk(movieStore.movieInfo.Poster, 'N/A')
              ? emptyImage
              : imageResize(movieStore.movieInfo.Poster, 'SX300', 'SX700')
          " />
      </div>
      <div class="movie-info">
        <h3 class="title">{{ movieStore.movieInfo.Title }}</h3>
        <h3 class="rating">{{ movieStore.movieInfo.imdbRating }}</h3>
        <ul class="movie-info-list">
          <li>
            <strong>Director</strong
            ><span>{{ movieStore.movieInfo.Director }}</span>
          </li>
          <li>
            <strong>Actors</strong
            ><span>{{ movieStore.movieInfo.Actors }}</span>
          </li>
          <li>
            <strong>Released</strong>
            <span>{{ movieStore.movieInfo.Released }}</span>
          </li>
          <li>
            <strong>Plot</strong>
            <span>{{ movieStore.movieInfo.Plot }}</span>
          </li>
        </ul>
      </div>
    </div>
    <Btn
      title="Prev Page"
      @click="router.back()" />
  </div>
</template>

<script setup lang="ts">
import { useMovieStore } from '../../store/movie';
import router from '../../routes/index';
import { useRoute } from 'vue-router';
import Btn from '../common/Btn.vue';
import { imageUrlChk } from '../../utils/imageUrlChk';
import { imageResize } from '../../utils/imageResize';

const route = useRoute();
const movieStore = useMovieStore();

if (typeof route.params.id === 'string') {
  movieStore.fetchMovieViewData(route.params.id);
}

const emptyImage = `https://placehold.co/350x520?text=No+Image`;
</script>

<style scoped lang="scss">
header {
  background-color: rgba(255, 255, 255, 0.3);
}
.movie-sub-page {
  position: relative;
  top: -80px;
  width: 100vw;
  height: 300px;
  background-size: cover;
  background-position: center;
}
.movie-viewer {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;

  .movie-img {
    width: 350px;
    margin-right: 20px;

    img {
      max-width: 100%;
    }
  }
  .movie-info {
    line-height: 1.3;
    width: calc(100% - 370px);
    h3.title {
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    h3.rating {
      margin-bottom: 30px;
      border-radius: 50px;
      background-color: #e13232;
      color: #fff;
      display: inline-block;
      padding: 5px 10px;
    }

    .movie-info-list {
      li {
        margin-bottom: 20px;

        strong {
          display: block;
          font-weight: 600;
          margin-bottom: 10px;
          font-size: 18px;
        }

        span {
          display: -webkit-box;
          white-space: normal;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
../../utils/ImageUrlCheck ../../utils/imageUrlChk

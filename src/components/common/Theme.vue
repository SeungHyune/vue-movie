<template>
  <button
    class="theme-button"
    @click="movieStore.themeChange()">
    <img
      :src="
        movieStore.isTheme
          ? 'https://github.com/SeungHyune/vue-movie/blob/main/image/theme/light-icon.png?raw=true'
          : 'https://github.com/SeungHyune/vue-movie/blob/main/image/theme/dark-icon.png?raw=true'
      " />
  </button>
</template>

<script setup lang="ts">
import { useMovieStore } from '../../store/movie';

const movieStore = useMovieStore();
</script>

<style scoped lang="scss">
.theme-button {
  width: 26px;
  height: 26px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  padding: 5px;
  margin-left: 15px;

  &:hover {
    img {
      transform: rotate(180deg);
    }
  }

  img {
    transition: transform 0.2s;
    width: 16px;
    height: 16px;
  }
}
</style>

<template>
  <Teleport to="body">
    <div
      v-if="movieStore.isLoading"
      class="loader-bg">
      <div class="the-loader"></div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useMovieStore } from '/src/store/movie.ts';
const movieStore = useMovieStore();
</script>

<style scoped lang="scss">
.loader-bg {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
}
.the-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border: 3px solid $color;
  border-top-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: spining 1s infinite linear;
}

@keyframes spining {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

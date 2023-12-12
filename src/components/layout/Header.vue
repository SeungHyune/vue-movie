<template>
  <header>
    <div class="header-wrap">
      <h1 @click="router.push('/')"><span>MovieTV</span></h1>
      <div class="search-box">
        <Search />
        <Theme />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import router from '../../routes/index';
import Search from '../search/Search.vue';
import Theme from '../common/Theme.vue';
import { useMovieStore } from '../../store/movie';

const movieStore = useMovieStore();
console.log(movieStore.isTheme, typeof movieStore.isTheme);
if (movieStore.isTheme) {
  document.body.classList.add('dark');
  console.log(2);
} else {
  document.body.classList.remove('dark');
  console.log(1);
}
</script>

<style scoped lang="scss">
header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #f1f1f1;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 10;

  .header-wrap {
    width: 100%;
    max-width: 1400px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    h1 {
      cursor: pointer;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 50px;
      font-weight: bold;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.02);
      }
    }

    span {
      background: linear-gradient(to right, #ff0000, #333);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .search-box {
    display: flex;
    align-items: center;
  }
}
</style>

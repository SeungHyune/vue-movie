<template>
  <button
    type="button"
    class="search-btn"
    @click="searchToggle">
    <span>검색</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false">
      <path
        d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
    </svg>
  </button>
  <form
    ref="searchForm"
    @submit.prevent="searchMovies">
    <div>
      <input
        v-model="title"
        placeholder="검색어를 입력해주세요." />
    </div>
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        focusable="false">
        <path
          d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
      </svg>
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMovieStore } from '../../store/movie';
import router from '../../routes/index';

const movieStore = useMovieStore();
const title = ref('');
const searchForm = ref<null | HTMLElement>(null);

function searchMovies() {
  router.push({
    name: 'movieList',
    params: {
      title: title.value
    }
  });
  movieStore.isScollCount = 0;
  movieStore.fetchNewMovie(title.value);
  title.value = '';
}

function searchToggle() {
  if (searchForm.value) {
    (searchForm.value as HTMLElement).classList.toggle('on');
  }
}
</script>

<style scoped lang="scss">
.search-box {
  flex-shrink: 0;
  form {
    display: flex;
    align-items: center;
    input {
      width: 300px;
      height: 40px;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      outline: none;
      padding: 0 10px;
      border-right: 0;
      transition: background 0.2s;

      &:hover,
      &:focus {
        background-color: #fafafa;
      }
    }
    button {
      display: flex;
      align-items: center;
      width: 40px;
      height: 40px;
      border: 0;
      cursor: pointer;
      background-color: #e13232;
      transition: background 0.3s;

      &:hover {
        background-color: #af3535;
      }

      svg {
        fill: #fff;
      }
    }
  }
  .search-btn {
    display: none;
    justify-content: space-between;
    align-items: center;
    border: 0;
    outline: 0;
    background-color: #e13232;
    border-radius: 5px;
    color: #fff;
    padding: 5px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #af3535;
    }

    span {
      margin-right: 5px;
    }

    svg {
      fill: #fff;
    }
  }
}
</style>

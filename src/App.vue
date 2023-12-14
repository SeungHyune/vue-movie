<template>
  <TheLoader />
  <Header />
  <Main />
  <TopButton />
</template>

<script setup lang="ts">
import Header from './components/layout/Header.vue';
import Main from './components/layout/Main.vue';
import TheLoader from './components/common/TheLoader.vue';
import TopButton from './components/common/TopButton.vue';
</script>

<style>
@import './scss/Theme.scss';

body {
  padding: 80px 0 20px;
  box-sizing: border-box;
  background-color: #fafafa;
  font-family: 'Noto Sans KR', sans-serif;
}
</style>

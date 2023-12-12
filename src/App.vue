<template>
  <TheLoader />
  <Header />
  <Main />
</template>

<script setup lang="ts">
import Header from './components/layout/Header.vue';
import Main from './components/layout/Main.vue';
import TheLoader from './components/common/TheLoader.vue';
</script>

<style>
@import './scss/Theme.scss';

body {
  padding: 80px 0 20px;
  box-sizing: border-box;
  background-color: #fafafa;
}
</style>

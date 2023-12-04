<template>
  <Header />
  <RouterView />
</template>

<script setup lang="ts">
import Header from '~/components/common/Header.vue';
</script>

<style>
body {
  padding: 80px 0 20px;
  box-sizing: border-box;
  background-color: #fafafa;
}
</style>

<template>
  <button @click="scrollTop">Top</button>
</template>

<script setup lang="ts">
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped lang="scss">
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e13232;
  cursor: pointer;
  transition: all 0.2s;
  text-indent: -9999px;
  outline: none;
  border: 0;

  &:hover {
    transform: translateY(-5px);
  }

  &:after {
    position: absolute;
    left: 50%;
    top: 55%;
    content: '';
    width: 15px;
    height: 15px;
    border-top: 5px solid #fff;
    border-right: 5px solid #fff;
    transform: translate(-50%, -50%) rotate(312deg);
  }
}
</style>

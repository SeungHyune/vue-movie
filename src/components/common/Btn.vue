<template>
  <button
    type="button"
    class="backbtn">
    {{ props.title }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps(['title']);
</script>

<style scoped lang="scss">
.backbtn {
  margin: 50px auto;
  text-align: center;
  display: block;
  width: 200px;
  height: 50px;
  border: 0;
  background-color: #e13232;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #af3535;
  }
}
</style>

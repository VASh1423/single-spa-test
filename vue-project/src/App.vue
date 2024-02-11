<template>
  <div>Vue Counter:  {{ counter }}</div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const counter = ref(0);

    return {
      counter
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

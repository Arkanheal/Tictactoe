<script setup lang="ts">
import Grid from "./components/Grid.vue";
import Header from "./components/Header.vue";
import { useGridStore } from '@/stores/grid.js'

const store = useGridStore();
</script>

<template>
<Header />
<div class="message" v-if="store.victory">
  🎉 Victory !! 🎉
</div>
<Grid />
</template>

<style scoped>
  .message{
    margin: 0 auto;
    width: 15vw;
    text-align: center;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 2em;
    font-weight: 700;
    color: #DE3344;
    margin-bottom: max(25px, 5vh);
  }
</style>

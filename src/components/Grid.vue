<script lang="ts">
import Tile from "./Tile.vue";
export default { 
  components: { Tile },
  data() {
    return {
      tiles: [
        {
          id: 1,
          symbol: 0,
        },
        {
          id: 1,
          symbol: 0,
        },
        {
          id: 1,
          symbol: 0,
        },
        {
          id: 1,
          symbol: 0,
        },
        {
          id: 1,
          symbol: 0,
        },
        {
          id: 1,
          symbol: 0,
        },
        {
          id: 1,
          symbol: 0,
        },
        {
          id: 1,
          symbol: 0,
        },
        {
          id: 1,
          symbol: 0,
        },
      ]
    }
  },
  }
</script>

<template>
<div id="main_grid">
  <Tile
    v-for="n in 16"
    :key="n" 
  />
</div>
</template>

<style scoped>
#main_grid{
  margin: auto;
  width: 50%;
  height: max(250px, 50%);
  display: grid;
  grid-template-columns: repeat(4, minmax(20px, 1fr));
  gap: 0;
  border-radius: 10px;
  border: 5px solid black;
} 
</style>

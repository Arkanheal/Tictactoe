<script setup lang="ts">
import Tile from "./Tile.vue";
import { useGridStore } from '@/stores/grid.js'
import { reactive } from "vue";

const store = useGridStore();
const symbols = reactive(["Cross","Triangle","Circle","Square"])

function checkTurn(index: number) {
    if(!store.grid[index].clickable){
      return
    }
    if(store.turn === 0){
      store.grid[index].symbol = symbols[store.turn];
    }
    store.grid[index].symbol = symbols[store.turn%4];
    store.grid[index].clickable = false;
    store.turn++;
}
</script>

<template>
<div id="main_grid">
  <Tile
    v-for="(tile, index,) in store.grid"
    :key="tile.id" 
    :symbol="tile.symbol"
    @checkTurn="checkTurn(index)"
  />
</div>
</template>

<style scoped>
#main_grid{
  margin: auto;
  width: max(300px, 35%);
  display: grid;
  grid-template-columns: repeat(4, minmax(20px, 1fr));
  gap: 0;
  border-radius: 10px;
  border: 5px solid var(--color-text);
;
} 
</style>

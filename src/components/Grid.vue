<script setup lang="ts">

import Tile from "./Tile.vue";
import { useGridStore } from '@/stores/grid.js'

const store = useGridStore();

function checkVictory(index: number, index_row: number) {

  let currentSymbol = store.grid[index_row][index].symbol;

}

function checkTurn(index: number, index_row : number) {

  if(!store.grid[index_row][index].clickable){
    return
  }

  if(store.turn === 0){
    store.grid[index_row][index].symbol = store.symbols[store.turn];
  }

  store.grid[index_row][index].symbol = store.symbols[store.turn%4];
  store.grid[index_row][index].clickable = false;

  checkVictory(index, index_row);

  store.turn++;

}

</script>

<template>

<div id="main_grid">

  <div class="row" v-for="(row, index_row,) in store.grid"
    :key="index_row"
  >
  <Tile
    v-for="(tile, index,) in row"
    :key="index"
    :symbol="tile.symbol"
    @checkTurn="checkTurn(index, index_row)"
  /></div>

</div>

</template>

<style scoped>

#main_grid {
  margin: auto;
  width: max(300px, 35%);
  display: grid;
  grid-template-columns: repeat(4, minmax(20px, 1fr));
  gap: 0;
  border-radius: 10px;
  border: 5px solid var(--color-text);
} 

</style>

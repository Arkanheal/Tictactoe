<script setup lang="ts">

import Tile from "./Tile.vue";
import { useGridStore } from '@/stores/grid.js'

const userSessionExist : String = $cookies.isKey('user-session');

const store = useGridStore();

function isValidTile(index_col : number, index : number){
  return index_col < 4 && index_col >= 0 && index < 4 && index >= 0;
}

function checkVictory(index: number, index_col: number) {

  let currentSymbol : String = store.grid[index_col][index].symbol;
  
  // First surroundings
  let rightSymbol : String = isValidTile(index_col + 1, index) ? store.grid[index_col + 1][index].symbol:"";
  let leftSymbol : String = isValidTile(index_col - 1, index) ? store.grid[index_col - 1][index].symbol:"";
  let botSymbol : String = isValidTile(index_col, index + 1) ? store.grid[index_col][index + 1].symbol:"";
  let topSymbol : String = isValidTile(index_col, index - 1) ? store.grid[index_col][index - 1].symbol:"";
  let topLeftSymbol : String = isValidTile(index_col - 1, index - 1) ? store.grid[index_col - 1][index - 1].symbol:"";
  let topRightSymbol : String = isValidTile(index_col + 1, index - 1) ? store.grid[index_col + 1][index - 1].symbol:"";
  let botLeftSymbol : String =  isValidTile(index_col - 1, index + 1) ? store.grid[index_col - 1][index + 1].symbol:"";  
  let botRightSymbol : String = isValidTile(index_col + 1, index + 1) ? store.grid[index_col + 1][index + 1].symbol:"";
  
  if ((currentSymbol === rightSymbol && rightSymbol === leftSymbol) || 
    (currentSymbol === topSymbol && topSymbol === botSymbol) ||
    (currentSymbol === topLeftSymbol && topLeftSymbol === botRightSymbol) ||
    (currentSymbol === topRightSymbol && topRightSymbol === botLeftSymbol)) {
    store.victory = true;
  }

  // Second surroundings
  let rightFarSymbol : String = isValidTile(index_col + 2, index) ? store.grid[index_col + 2][index].symbol:"";
  let leftFarSymbol : String = isValidTile(index_col - 2, index) ? store.grid[index_col - 2][index].symbol:"";
  let botFarSymbol : String = isValidTile(index_col, index + 2) ? store.grid[index_col][index + 2].symbol:"";
  let topFarSymbol : String = isValidTile(index_col, index - 2) ? store.grid[index_col][index - 2].symbol:"";
  let topLeftFarSymbol : String = isValidTile(index_col - 2, index - 2) ? store.grid[index_col - 2][index - 2].symbol:"";
  let topRightFarSymbol : String = isValidTile(index_col + 2, index - 2) ? store.grid[index_col + 2][index - 2].symbol:"";
  let botLeftFarSymbol : String =  isValidTile(index_col - 2, index + 2) ? store.grid[index_col - 2][index + 2].symbol:"";  
  let botRightFarSymbol : String = isValidTile(index_col + 2, index + 2) ? store.grid[index_col + 2][index + 2].symbol:"";
  
  if ((currentSymbol === rightSymbol && rightSymbol === rightFarSymbol) || 
    (currentSymbol === leftSymbol && leftSymbol === leftFarSymbol) ||
    (currentSymbol === botSymbol && botSymbol === botFarSymbol) ||
    (currentSymbol === topSymbol && topSymbol === topFarSymbol) ||
    (currentSymbol === topLeftSymbol && topLeftSymbol === topLeftFarSymbol) ||
    (currentSymbol === topRightSymbol && topRightSymbol === topRightFarSymbol) ||
    (currentSymbol === botLeftSymbol && botLeftSymbol === botLeftFarSymbol) ||
    (currentSymbol === botRightSymbol && botRightSymbol === botRightFarSymbol)) {
    store.victory = true;
  }

  
}

function checkTurn(index: number, index_col : number) {

  if(!store.grid[index_col][index].clickable){
    return
  }

  if(store.turn === 0){
    store.grid[index_col][index].symbol = store.symbols[store.turn];
  }

  store.grid[index_col][index].symbol = store.symbols[store.turn%4];
  store.grid[index_col][index].clickable = false;

  checkVictory(index, index_col);

  store.turn++;

}

</script>

<template>

<div id="main_grid" v-if="userSessionExist">

  <div class="col" v-for="(col, index_col,) in store.grid"
    :key="index_col"
  >
  <Tile
    v-for="(tile, index,) in col"
    :key="index"
    :symbol="tile.symbol"
    @checkTurn="checkTurn(index, index_col)"
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

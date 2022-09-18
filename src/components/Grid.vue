<script lang="ts">
import Tile from "./Tile.vue";
import grid_json from "../assets/json/grid.json";
export default { 
  components: { Tile },
  data() {
    return {
      turn: 0,
      tiles: grid_json,
      symbols: ["Cross", "Triangle","Circle","Square"]
    }
  },
  methods: {
    checkTurn(index: number) {
      if(this.turn === 0){
        this.tiles[index].symbol = this.symbols[this.turn];
      }
      this.tiles[index].symbol = this.symbols[this.turn%4];
      this.turn++;
    }
  }
}
</script>

<template>
<div id="main_grid">
  <Tile
    v-for="(tile, index,) in tiles"
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
  border: 5px solid black;
} 
</style>

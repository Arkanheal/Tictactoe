import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import grid_json from '../assets/json/grid.json'

export const useGridStore = defineStore('grid', () => {
  function resetGrid(){
    this.grid.forEach(row => {
      row.map(element => {
        element.symbol = "";
        element.clickable = true;
      });
    });
    this.turn = 0;
    $cookies.set("user-session", Math.random().toString(36).substring(2, 9), "320s");
  }
  const turn = ref(0);
  const victory =ref(false);
  const grid = ref(grid_json);
  const symbols = ref(["Cross","Triangle","Circle","Square"])
  return { turn, grid, symbols, resetGrid };
})

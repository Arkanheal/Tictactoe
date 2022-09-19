<script setup lang="ts">
import { useGridStore } from '@/stores/grid.js'
const store = useGridStore();
</script>

<template>
  <div id="header" class="wrapper">
  <div class="header_item">
    Logo
  </div>
  <div class="header_item" @click="store.resetGrid()">
    Nouvelle partie
  </div>
  <div>
    Turn: {{ store.turn }}
  </div>
  </div>
    
</template>

<style scoped>
#header {
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-direction:row;
  justify-content: center;
  gap: 15vw;
  align-items: baseline;
  background-color: #343434;
}
</style>

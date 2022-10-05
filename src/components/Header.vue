<script setup lang="ts">

import { useGridStore } from '@/stores/grid.js';
import { computed } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';

const store = useGridStore();

const comp = computed(() => {

  if($cookies.isKey('game-id')){
    if(store.turn === 0) {
      return defineAsyncComponent(
        () => import(`./icons/Cross.vue`)
      );
    }

    return defineAsyncComponent(
      () => import(`./icons/${store.symbols[store.turn%4]}.vue`)
    );
  }

})

</script>

<template>

  <div id="header" class="wrapper">
  
    <div class="header_item">
      Logo
    </div>

    <div class="header_item" :class="{ 'end_game': store.victory }" @click="store.resetGrid()">
      Nouvelle partie
    </div>

    <div class="symbol_info">
      Next Symbol: <component :is="comp"></component>
    </div>

    <div>
      Turn: {{ store.turn >= 15 ? 'Dernier tour' : store.turn }} 
    </div>

  </div>
    
</template>

<style scoped>

#header {
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: max(50px, 5vh);
  flex-direction:row;
  justify-content: center;
  gap: 15vw;
  align-items: center;
  background-color: #343434;
  margin-bottom: max(50px, 5vh);
}

.end_game {
  animation: blinker 1.8s linear infinite;
  color: #E4E4E4;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

svg {
  width: max(25px, 1vh);
}

</style>

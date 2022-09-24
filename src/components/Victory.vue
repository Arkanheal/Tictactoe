<script setup lang="ts">

import { useGridStore } from '@/stores/grid.js'
import { computed } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';

const store = useGridStore();
  
const comp = computed(() => {

  if(store.turn === 0) {
    return defineAsyncComponent(
      () => import(`./icons/Cross.vue`)
    )
  }

  return defineAsyncComponent(
    () => import(`./icons/${store.symbols[store.turn%4]}.vue`)
  )

})
</script>

<template>
<div class="message" v-if="store.victory">
🎉 Victory !! 🎉
</div>
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

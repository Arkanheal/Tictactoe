<script lang="ts">
export default {
  props: {
    'symbol': {
      type: String,
      required: true,
    }
  },
  computed: {
    comp (): AsyncComp {
      if(this.symbol !== ""){
        return defineAsyncComponent(() => import(`./icons/${this.symbol}.vue`))
      }
    },
  },
  emits: ['checkTurn']
}
import Circle from './icons/Circle.vue';
import Square from './icons/Square.vue';
import Triangle from './icons/Triangle.vue';
import Cross from './icons/Cross.vue';
import { defineAsyncComponent } from 'vue';
</script>

<template>
  <div class="cell" @click.once="$emit('checkTurn')">
    <component :is="comp"></component>
  </div>
</template>

<style scoped>
.cell {
  aspect-ratio: 1/ 1;
  background-color: #AFAFAF;
  color: #1E1E1E;
  display: flex;
  place-content: center;
  padding: 5%;
  border: 1px solid black;
}
svg{
  width: 100%;
  height: auto;
}
</style>

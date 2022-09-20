<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';
const emit = defineEmits(['checkTurn']);
const props = defineProps({symbol: {type: String, required: true}});
const comp = computed(() => {
  if(props.symbol !== "") {
    return defineAsyncComponent(
      () => import(`./icons/${props.symbol}.vue`)
    )
  }
})
</script>

<template>
  <div class="cell" @click="$emit('checkTurn')">
    <component :is="comp"></component>
  </div>
</template>

<style scoped>
.cell {
  aspect-ratio: 1/ 1;
  background-color: var(--color-background);
  color: #1E1E1E;
  display: flex;
  place-content: center;
  padding: 5%;
  border: 1px solid var(--color-text);
}
svg{
  width: 100%;
  height: auto;
}
</style>

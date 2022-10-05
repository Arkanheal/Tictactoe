<script setup lang="ts">
  
import { useQueueStore } from '@/stores/queue.js';

const queueStore = useQueueStore();
const userInQueue = await queueStore.queueSize();

</script>

<template>
  <div>
   {{ userInQueue }}/4
  </div>
</template>

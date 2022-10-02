<script setup lang="ts">
import { useQueueStore } from '@/stores/queue.js'
  
const queueStore = useQueueStore();

const userSessionExist: boolean = $cookies.isKey('user-session');
</script>


<template>
  <div v-if="userSessionExist">
   Yo {{ queueStore.users.length }}/4
  </div>
</template>

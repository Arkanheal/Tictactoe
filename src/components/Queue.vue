<script setup lang="ts">
import QueuePos from "./QueuePos.vue";

const userSessionExist: boolean = $cookies.isKey('user-session');

</script>

<template v-if="userSessionExist">

<div class="queue_wrapper">
  <div class="main_queue_text">
    Position in queue:
  </div>
  <div class="position_queue">
    <Suspense>
      <QueuePos />
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</div>

</template>

<style scoped>
  .queue_wrapper {
    margin: 0 auto;
    border: 5px solid var(--color-text);
    border-radius: 15px;
    padding-inline: 2vw;
    padding-block: 2vh;
    width: 15vw;
    text-align: center;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 2em;
  }
</style>

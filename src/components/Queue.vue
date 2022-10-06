<script setup lang="ts">
import { inject } from "vue";
import type { VueCookies } from "vue-cookies";
import QueuePos from "./QueuePos.vue";

const $cookies = inject<VueCookies>('$cookies');
const userSessionExist: boolean = $cookies.isKey('user-session');

</script>

<template>

<div class="queue_wrapper" v-if="userSessionExist">
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

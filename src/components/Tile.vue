<script lang="ts">
export default {
    props: ['symbol']
}
</script>

<template>
  <div class="cell">
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

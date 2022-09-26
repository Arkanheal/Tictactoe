<script setup lang="ts">
import { useGridStore } from '@/stores/grid.js'
const store = useGridStore();
const userSessionExist : String = $cookies.isKey('user-session');
</script>

<template>
  <div v-if="!userSessionExist">
    <button id="newGame" @click="store.resetGrid()">Nouvelle partie</button>
  </div>
</template>

<style scoped>

div {
  margin: 0 auto;
  width: max(300px, 35%);
  display: flex;
  justify-content: center;
}

#newGame {
	background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
	border-radius: 3px;
	border: 1px solid #124d77;
	cursor: pointer;
	color: #ffffff;
	font-size: 15px;
	padding: 2vh 2vw;
	text-decoration: none;
}

#newGame:hover {
	background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
	background-color: #0061a7;
}

#newGame:active {
	position: relative;
	top: 1px;
}

</style>

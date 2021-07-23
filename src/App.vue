<template>
  <div style="display: flex">
    <Game type="self"></Game>
    <Game type="rival"></Game>
    <button @click="handleStartGame">startGame</button>
  </div>
</template>

<script setup>
import Game from './components/Game.vue'
import { startGame } from './game'
function handleStartGame() {
  startGame()
}
</script>

<style></style>

<template>
  <div style="margin: 0 10px">
    <div class="row" v-for="i in gameRow" :key="i">
      <div v-for="j in gameCol" :key="j">
        <Box :type="map[i - 1][j - 1]"></Box>
      </div>
    </div>
  </div>
</template>

<script setup>
import Box from './Box.vue'
import { gameRow, gameCol, initSelfGame, initRivalGame } from '../game'
import { reactive } from 'vue'

const map = reactive([])

const props = defineProps(['type'])

if (props.type === 'self') {
  initSelfGame(map)
} else if (props.type === 'rival') {
  initRivalGame(map)
}
</script>
<style scoped>
.row {
  display: flex;
}
</style>

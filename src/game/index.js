export * from './config'
import { Game } from './Game'
import { initMessage } from './message'
import { Player } from './Player'
import { Rival } from './Rival'

export function initGame() {
  initMessage()
}

let selfGame

export function initSelfGame(map) {
  selfGame = new Game(map)
  selfGame.addPlayer(new Player())
}
let rivalGame
export function initRivalGame(map) {
  rivalGame = new Game(map)
  rivalGame.addPlayer(new Rival())
}

export function startGame() {
  selfGame.start()
}

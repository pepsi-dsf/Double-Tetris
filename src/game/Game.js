import { createBox } from './Box'
import { hitBottomBorder, hitBottomBox } from './hit'
import { addBoxToMap, eliminate, initMap } from './map'
import { message } from './message'
import { render } from './render'
import { addTicker } from './ticker'
import { intervalTimer } from './utils'

export class Game {
  constructor(map) {
    initMap(map)
    this._map = map
    this._activeBox = null
  }
  addPlayer(player) {
    player.init(this)
  }
  //策略模式
  _createBoxStrategy = null
  start() {
    this._activeBox = this._createBoxStrategy()
    addTicker(this.handleTicker.bind(this))
  }
  setCreateBoxStrategy(strategy) {
    this._createBoxStrategy = strategy
  }

  //就近原则  下划线表示私有变量
  _isDownMove = intervalTimer()
  autoMoveDown = true
  handleTicker(n) {
    if (this.autoMoveDown) {
      if (this._isDownMove(n, 1000)) {
        this.moveBoxToDown()
        message.emit('moveBoxToDown')
      }
    }

    render(this._activeBox, this._map)
  }
  moveBoxToDown() {
    if (
      hitBottomBorder(this._activeBox) ||
      hitBottomBox(this._activeBox, this._map)
    ) {
      addBoxToMap(this._activeBox, this._map)
      eliminate(this._map)
      this._activeBox = this._createBoxStrategy()
      return
    }
    this._activeBox.y++
  }

  moveBoxToLeft() {
    this._activeBox.x--
  }
  moveBoxToRight() {
    this._activeBox.x++
  }
  rotateBox() {
    this._activeBox.rotate()
  }
}

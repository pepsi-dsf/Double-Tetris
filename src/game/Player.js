import { createBox } from './Box'
import { message } from './message'

export class Player {
  constructor() {
    this._game = null
  }
  init(game) {
    this._game = game
    this._game.setCreateBoxStrategy(this.handleCreateBox.bind(this))
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }
  handleCreateBox() {
    const box = createBox()
    //将自己这边的盒子消息发给对手  这样对手显示出来的方块才是和自己一样的
    message.emit('createBox', { type: box.type })
    return box
  }
  handleKeyDown(e) {
    switch (e.code) {
      case 'ArrowLeft':
        this._game.moveBoxToLeft()
        message.emit('moveBoxToLeft')
        break
      case 'ArrowRight':
        this._game.moveBoxToRight()
        message.emit('moveBoxToRight')
        break
      case 'ArrowUp':
        //box->shape->rotate
        this._game.rotateBox()
        message.emit('rotateBox')
        break
      default:
        break
    }
  }
}

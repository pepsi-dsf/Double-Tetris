import { rotate } from './matrix'

export class Box {
  constructor() {
    this.x = 0
    this.y = 0
    this.shape = [
      [1, 1],
      [1, 1]
    ]
  }
  _rotates = []
  _rotatesIndex = 0
  rotate() {
    const rotateFn = this._rotates[this._rotatesIndex]
    if (!rotateFn) return
    this.shape = rotateFn.call(null, this.shape)
    this._rotatesIndex++
    if (this._rotatesIndex >= this._rotates.length) {
      this._rotatesIndex = 0
    }
  }
  setRotateStrategy(v) {
    if (!v) return
    this._rotates = v
  }
}
const boxInfos = {
  0: {
    shape: [
      [1, 1],
      [1, 1]
    ]
  },

  1: {
    shape: [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0]
    ],
    //策略模式
    rotateStrategy: [rotate, (m) => rotate(rotate(rotate(m)))]
  },
  2: {
    shape: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 0]
    ],
    rotateStrategy: [rotate, rotate, rotate, rotate]
  }
}

//工厂模式
export function createBox() {
  let box = new Box()
  const { shape, rotateStrategy } = getRandomBoxInfo()

  box.shape = shape
  box.setRotateStrategy(rotateStrategy)
  return box
}
function getRandomBoxInfo() {
  const max = Object.keys(boxInfos).length
  const key = Math.floor(Math.random() * max)
  return boxInfos[key]
}

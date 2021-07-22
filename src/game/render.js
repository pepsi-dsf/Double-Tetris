import { gameCol, gameRow } from './config'

export function render(box, map) {
  //把之前的box清理
  //reset
  reset(map)
  _render(box, map)
}
function _render(box, map) {
  //render
  //添加box->map

  const row = box.shape.length
  const col = box.shape[0].length

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // map[i][j] = box.shape[i][j]
      const x = box.x + j
      const y = box.y + i
      if (box.shape[i][j] > 0) {
        map[y][x] = 1
      }
    }
  }
}
function reset(map) {
  for (let i = 0; i < gameRow; i++) {
    for (let j = 0; j < gameCol; j++) {
      if (map[i][j] > 0) {
        map[i][j] = 0
      }
    }
  }
}

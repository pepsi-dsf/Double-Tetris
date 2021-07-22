import { gameRow, gameCol } from './config'

//map

export function initMap(map) {
  //init map
  for (let i = 0; i < gameRow; i++) {
    map[i] = []
    for (let j = 0; j < gameCol; j++) {
      map[i][j] = 0
    }
  }
}

export function addBoxToMap(box, map) {
  const row = box.shape.length
  const col = box.shape[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const x = box.x + j
      const y = box.y + i
      if (box.shape[i][j] > 0) {
        map[y][x] = -1
      }
    }
  }
}

export function eliminate(map) {
  //1.需要获取所有满行的索引
  const lines = getCanEliminateLine(map)

  //2.删除满行的  在头部添加新的一行
  _eliminate(lines, map)
}
function _eliminate(lines, map) {
  const col = map[0].length
  lines.forEach((i) => {
    map.splice(i, 1)
    map.unshift(new Array(col).fill(0))
  })
}
function getCanEliminateLine(map) {
  const lines = map.reduce((r, col, i) => {
    const boo = col.every((v) => {
      return v === -1
    })
    if (boo) {
      r.push(i)
    }
    return r
  }, [])
  return lines
}

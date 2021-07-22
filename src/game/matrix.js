export function getBoxBottomPoints(matrix) {
  const row = matrix.length
  const col = matrix[0].length
  const points = []
  for (let j = 0; j < col; j++) {
    //point
    const x = j
    const y = row - 1
    if (matrix[y][x] > 0) {
      points.push({
        x,
        y
      })
    }
  }
  return points
}
export function rotate(matrix) {
  const row = matrix.length
  const col = matrix[0].length
  let r = []
  //逆时针90度
  //列=行
  //行=n-1-列(j)
  //n表示总行数
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let k = row - 1 - j
      if (!r[k]) {
        r[k] = []
      }
      r[k][i] = matrix[i][j]
    }
  }
  return r
}

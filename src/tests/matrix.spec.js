import { getBoxBottomPoints, rotate } from '../game/matrix'

test('获取matrix底部的所有点', () => {
  const matrix = [
    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 0]
  ]

  const points = getBoxBottomPoints(matrix)
  expect(points).toEqual([{ x: 0, y: 2 }])
})

test('rotate', () => {
  const matrix = [
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0]
  ]

  expect(rotate(matrix)).toEqual([
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 0]
  ])
})

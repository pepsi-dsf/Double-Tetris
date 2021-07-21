import { getBoxBottomPoints } from '../game/matrix'

test('获取matrix底部的所有点', () => {
  const box = {
    x: 0,
    y: 5,
    shape: [
      [1, 1],
      [1, 1]
    ]
  }

  const points = getBoxBottomPoints(box.shape, { x: box.x, y: box.y })
  expect(points).toEqual([
    {
      x: 0,
      y: 6
    },
    { x: 1, y: 6 }
  ])
})

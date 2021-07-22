import { hitBottomBorder, hitBottomBox } from '../game/hit'

test('当box到达底部时,应该返回true', () => {
  const box = {
    x: 0,
    y: 9,
    shape: [
      [1, 1],
      [1, 1]
    ]
  }

  const map = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ]

  expect(hitBottomBorder(box)).toBe(true)
})
test('当box底部碰到其他的box的时候,应该返回true', () => {
  const box = {
    x: 0,
    y: 0,
    shape: [
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0]
    ]
  }

  const map = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, 0, 0, 0, 0],
    [-1, 0, 0, 0, 0, 0]
  ]

  expect(hitBottomBox(box, map)).toBe(false)
})

import { hitBorder } from '../game/hit'

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

  expect(hitBorder(box)).toBe(true)
})

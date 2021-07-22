export * from './config'
import { initMap, addBoxToMap, eliminate } from './map'
import { render } from './render'
import { Box, createBox } from './Box'
import { addTicker } from './ticker'
import { intervalTimer } from './utils'
import { hitBottomBorder, hitBottomBox } from './hit'
export function startGame(map) {
  initMap(map)
  const isDownMove = intervalTimer()
  let activeBox = createBox()
  function handleTicker(n) {
    if (isDownMove(n, 1000)) {
      if (hitBottomBorder(activeBox) || hitBottomBox(activeBox, map)) {
        //为了不让box reset
        //box->map->-1
        addBoxToMap(activeBox, map)
        eliminate(map)
        activeBox = createBox()
        return
      }
      activeBox.y++
    }
    render(activeBox, map)
  }
  window.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'ArrowLeft':
        activeBox.x--
        break
      case 'ArrowRight':
        activeBox.x++
        break
      case 'ArrowUp':
        //box->shape->rotate
        activeBox.rotate()
        break
      default:
        break
    }
  })

  addTicker(handleTicker)
}

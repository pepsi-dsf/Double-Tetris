//闭包封闭变量t
export function intervalTimer() {
  let t = 0
  return (n, intervalTime) => {
    t += n
    if (t >= intervalTime) {
      t = 0
      return true
    } else return false
  }
}

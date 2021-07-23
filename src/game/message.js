//socket
////socket.io ->不稳定的外部依赖
//message文件是一个防腐层
//后期不想用socket.io 只需要变动防腐层
//封装 将容易变动的代码写到容易改的小角落里
import { io } from 'socket.io-client'
let socket
export function initMessage() {
  socket = io('http://localhost:3001')
  socket.on('connect', () => {
    console.log('连接成功')
  })
  socket.on('msg', (info) => {
    console.log(info)
  })
}
export const message = {
  on(...args) {
    return socket.on(...args)
  },
  emit(...args) {
    return socket.emit(...args)
  }
}

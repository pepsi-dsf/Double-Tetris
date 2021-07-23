const Koa = require('koa')
const app = new Koa()
const httpServer = require('http').createServer(app.callback())
const options = {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
}
const io = require('socket.io')(httpServer, options)
io.on('connection', (socket) => {
  console.log('connection')
  socket.emit('msg', '你好呀')
  socket.on('moveBoxToLeft', () => {
    //io ->发给所有人 包括他自己
    io.emit('moveBoxToLeft')
    // socket.broadcast.emit('moveBoxToLeft')
  })
  socket.on('moveBoxToRight', () => {
    io.emit('moveBoxToRight')
    // socket.broadcast.emit('moveBoxToRight')
  })
  socket.on('rotateBox', () => {
    io.emit('rotateBox')
    // socket.broadcast.emit('rotateBox')
  })
  socket.on('moveBoxToDown', () => {
    io.emit('moveBoxToDown')
    // socket.broadcast.emit('moveBoxToDown')
  })
  socket.on('createBox', (info) => {
    io.emit('createBox', info)
    // socket.broadcast.emit('createBox')
  })
})
httpServer.listen(3001)

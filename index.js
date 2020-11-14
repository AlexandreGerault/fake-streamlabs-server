const dotenv = require('dotenv').config();
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 1234;

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('event', (event) => {
    io.emit('event', event)
  })
});

http.listen(process.env.PORT, () => {
  console.log(`listening on *:${PORT}`);
});

const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function (socket) {

    socket.on('changeColor', function (locationButton, buttonClass) {
        if (buttonClass === 'colorA') {
            buttonClass = 'colorB';
            io.emit('newLocationMessage', locationButton, buttonClass);
        } else {
            buttonClass = 'colorA';
            io.emit('newLocationMessage', locationButton, buttonClass);
        }
    });
});

server.listen(port, () => {
    console.log(`Port : ${port}`);
});

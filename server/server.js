const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Person',
        text: 'This is a message',
        createdAt: 12345678
    });

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);
    });

    // socket.emit('newEmail', {
    //     from: 'yourdaddy@example.com',
    //     text: 'This is an email',
    //     createdAt: '12345'
    // });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
'use strict';

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let users = {};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('A user connected: ' + socket.id);

    socket.on('new user', (username, callback) => {
        if (username in users) {
            callback(false);
        } else {
            callback(true);
            socket.username = username;
            users[socket.username] = socket;
            updateUsernames();
        }
    });

    socket.on('send message', (data) => {
        io.emit('new message', { msg: data, user: socket.username });
    });

    socket.on('disconnect', () => {
        if (socket.username) {
            delete users[socket.username];
            updateUsernames();
        }
    });
});

const updateUsernames = () => {
    io.emit('get users', Object.keys(users));
};

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

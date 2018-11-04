let socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //     to: 'jimmybob@example.com',
    //     text: 'Hello! How you doin\''
    // });

    socket.emit('createMessage', {
        from: 'Messenger',
        text: 'this is a text'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

// socket.on('newEmail', function (email) {
//     console.log('New email', email);
// });

socket.on('newMessage', function (message) {
    console.log('New message', message);
});
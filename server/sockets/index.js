const User = require('../db/models/user');

//display online based on sockets array and in call array.
//when someone connects their user ID becomes a socket.
// when they call another user they connect to that socket
// if someone is in the in call array they calls are rejected
// GOTCHA if multiple calls come in, need ot kick non-participants out of socket
// --when call is accepted.


module.exports = io => {

  io.on('connection', socket => {

    console.log(socket.id, ' has made a persistent connection to the server!');

    socket.on('call', call => {
      socket.emit('new-call', call);
    });

    socket.on('call-accept', call => {
      //this action needs an identifier saying who was accepted
      socket.broadcast.emit('call-accept', call);

    });

  });

};

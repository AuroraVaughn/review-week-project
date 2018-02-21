// var Peer = require('simple-peer')
// var p = new Peer();

// p.on('singal' function (data) {

// })

var app = require('./server/app');
app.listen(3001, function () {
  console.log('Server is listening on port 3001!');
});


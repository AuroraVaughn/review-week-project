var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var router = require('./routes');


const PORT = 3000;
const server = app.listen(PORT, () => console.log(`Video chat server is open on ${PORT}`));
const io = require('socket.io')(server);
require('./socket')(io) //this will handle socket requests

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

app.use('*', router);


app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

module.exports = app;

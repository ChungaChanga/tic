'use strict';
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs');
const ReactDOMServer  = require('react-dom/server');
const React  = require('react');
//const Link = require('../client/src/Link.js');

var handlebars = require('express-handlebars').create();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', 8080);
app.use(express.static('client'));

/*class Link extends React.Component {
  render() {
    return (
      <p>Ссылка: {this.props.roomId}</p>
    );
  }
}*/



//var link = <Link roomId="5"/>;
//console.log(typeof Component)
app.get('/', function(req, res) {
  //Отправка приложения с предустановленным состоянием: ожидание соперника
  //res.sendFile(__dirname + '/index1.html');
  res.render('index1.handlebars', {roomId: null})
})
app.get('/room/:roomId', function(req, res) {
  //Отправка приложения с предустановленным состоянием игра началась:
  //roomId для соккета, статус active для приложения
  //let roomId = req.params.roomId;
  //res.sendFile(__dirname + '/index1.html');
   res.render('index1.handlebars', {roomId: req.params.roomId})
})
app.get('/io', function(req, res) {
  //res.type('text/html');
 
  //res.send(io.sockets.adapter.rooms);
  //res.sendFile(__dirname + '/client/build/io.html');
  //console.log(io)
})

io.on('connection', function(socket){
  socket.on('Waiting opponent', function(data) {
    socket.join(data.roomId);
  })
  socket.on('opponent came', function(data) {
    socket.join(data.roomId);
    io.to(data.roomId).emit('game started');
   // io.to(roomId.slice(4)).emit('made move', {coo})
  })
  //client.emit('conn')
  /*
  client.join('Game');
  console.log('New client connected with id:' + client.id);
  io.send(io.sockets.adapter.rooms);
  client.on('disconnect', function() {
    io.send('User ' + client.id + ' disconnect');
    io.send(io.sockets.adapter.rooms);
    console.log(io.sockets.adapter.rooms)
  })
  */
})



server.listen(app.get('port'), function() {
  console.log('Server was run on port: ', app.get('port'));
});


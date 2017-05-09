'use strict';
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs');
const ReactDOMServer  = require('react-dom/server');
const React  = require('react');
//const Link = require('../client/src/Link.js');
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
  var linkComponent = React.createElement(
    'h1',
    null,
    'Ссылка: ' + req.params.roomId
  )
  var link = ReactDOMServer.renderToString(linkComponent);
  res.send(link);
})
app.get('/io', function(req, res) {
  //res.type('text/html');
  //res.send(io.);
  res.sendFile(__dirname + '/client/build/io.html');
  //console.log(io)
})
app.get('/:roomId', function(req, res) {
  res.sendFile(__dirname + '/client/build/home.html');
 // res.sendFile(__dirname + '/client/index.html');
})
io.on('connection', function(client){
  client.join('Game', function() {
    client.join('room 1');
    client.join('room 2', function() {
      //client.emit('rooms', io.rooms);
      var n = io.of('/');
      console.log(n.sockets)
    });
   // console.log(client.rooms)
  });
  //console.log('New client connected with id:' + client.id);
  
  
  //client.emit('rooms', client.rooms);
  client.on('message', function(data) {
    io.sockets.to('Game').emit('message', 'Step ' + step);
  })
})


server.listen(app.get('port'), function() {
  console.log('Server was run on port: ', app.get('port'));
});


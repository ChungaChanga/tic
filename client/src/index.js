import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Game from './Game';
import './index.css';
var roomId = '';
ReactDOM.render(
  <App roomId={roomId}/>,
  document.getElementById('root')
);

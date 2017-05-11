import React, { Component } from 'react';
//import logo from './logo.svg';
import './Game.css';
//import Board from './components/Board.js';
//import Game from './components/Game.js';
import Room from './components/myGame3.js';
import Home from './components/Home.js';


class App extends Component {
  constructor(props) {
    var page = '';
    super(props);
    if (this.props.roomId) {
      page = 'Home';
    } else {
      page = 'Game';
    }
    this.state = {
      'page': page
    };
    console.log(this.state)
  }
  render() {
    return <Room roomId={this.props.roomId} firstStep={this.props.firstStep}/>; 
  }
}







export default App;

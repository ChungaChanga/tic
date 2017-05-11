import React, { Component } from 'react';
//import logo from './logo.svg';
import './Game.css';
//import Board from './components/Board.js';
import myGame2 from './components/myGame2.js';
import Home from './components/Home.js';


class App2 extends Component {
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
    switch (this.state.page) {
      case 'Home': return <Home roomId={this.props.roomId}/>;
      case 'Game': return <myGame2 roomId={this.props.roomId}/>; 
    }
  }
}







export default App2;

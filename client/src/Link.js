import React, { Component } from 'react';
//import logo from './logo.svg';
//import './Game.css';


class Link extends Component {
  render() {
    return (
      <p>Ссылка: {this.props.roomId}</p>
    );
  }
}

export default Link;

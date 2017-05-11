import React, { Component } from 'react';
//import logo from './logo.svg';
import '../Game.css';
//import Board from './components/Board.js';

//Первоначальная расстановка фигур
//Чей сейчас ход
//
//Координаты хода игрока (изменяют первоначальную расстановку фигур)
//Функция изменяющая расстановку фигур
//
//
//
class SquareX extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>X</div>;
  }
}
class SquareO extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>O</div>;
  }
}
class Square extends Component {
  constructor(props) {
    super(props);
  }
  getSquareFiller(n) {
    switch(n) {
      case 1: return <SquareX/>;
      case 2: return <SquareO/>;
      default: return null;
    }
  }
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.getSquareFiller()}
      </button>
    );
  }
}
class BoardRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var boardRow =  Array(this.props.size).fill(0).map(function(item, i) {
      return <Square numRow={this.props.numRow} numCol={i}/>
      }.bind(this));
    return (
    /*numCol={this.props.numCol} numRow={this.props.numRow}*/
      <div className="board-row">
       {boardRow}
      </div>
    );
  }
}

class Board extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var board = Array(this.props.size).fill(0).map(function(item, i) {
        return <BoardRow size={this.props.size} numRow={i}/>
      }.bind(this));
    return (
      <div>
       {board}
      </div>
    )
  }
}



class Game extends Component {
 constructor(props) {
    super(props);
    this.n = 4;
    this.size = 9;
    //this.isStepX = true;
  }
 render() {
   return (
    <Board size={this.size} />
   );
 }
}

// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}




export default Game;

import React, { Component } from 'react';
//import logo from './logo.svg';
import '../Game.css';
//import Board from './components/Board.js';


class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }
  /*componentWillReceiveProps() {
    this.setState({
      value: this.props.value
    })
  }*/
  render() {
    return (
      <button className="square" onClick={this.props.onClick} key={this.props.key}>
        {this.state.value}
      </button>
    );
  }
}
class SquaresRow extends Component {
  constructor(props) {
    super(props);
  }
  /*componentWillReceiveProps() {
    this.setState({
      value: this.props.value
    })
  }*/
  
  renderSquare(numRow, numCol, value) {
    return (
      <Square
        value={value}
        key={numRow + '' + numCol}
        onClick={(e) => this.props.onClick(e,numRow, numCol)}
        row={numRow}
        col={numCol}
      />
    );
  }
  
  render() {
    return (
      <div className="board-row" >
        {this.props.squares[numRow].map(function() {
          return this.renderSquare(this.props.numRow, this.props.numCol, value);
        }.bind(this))}
      </div>
    );
  }
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.fieldMap = [];
    this.state = {
      //field: this.createField()
      squares: this.props.squares
    }
    //this.createField();
    //this.fillSquares();
   //console.log(this.props.squares)
   console.log(this.createSquaresRow())
   
  }
  createSquaresRow(numRow=0,numCol=-1,value=numRow) {
    numCol++;
    return (
      <div className="board-row">
        {this.state.squares[numRow].map(function() {
          return this.renderSquare(numRow, numCol, value);
        }.bind(this))}
      </div>
    )
  }
  fillSquares(numRow=-1) {
    var value = this.state.squares[][]
    numRow++;
    var nextSquaresState = [];
    {this.state.squares.map(function() {
          return this.createSquaresRow(numRow, numCol, value);
        }.bind(this))}
    this.setState(function() {
      return (
        {
        squares: nextSquaresState
        }
      )
    });
  }
  /*fillSquares() {
    //var prevSquares = this.state.squares.slice();
    var nextSquaresState = [];
    for(var i=0; i< this.props.squares.length; i++) {
      nextSquaresState[i] = this.props.squares[i];
      for(var j=0; j< nextSquaresState[i].length; j++) {
        nextSquaresState[i][j] = this.renderSquare(i, j, this.props.squares[i][j]);;
      }
    }
    this.setState(function() {
      return (
        {
        squares: nextSquaresState
        }
      )
    });
  }*//*
  createFieldRow(numRow) {
    var numCol = -1;
     var fieldRow = this.props.squares.map( function() {
       var value = this.props.squares[numRow][numCol];
       //console.log(value);
       numCol++;
       return this.renderSquare(numRow, numCol, value);
     }.bind(this))
     //console.log(Array(this.props.size))
     return fieldRow;
  }
  createField() {
    var numRow = -1;
    var field = this.props.squares.map( function() {
       numRow++;
       return (
        <div className="board-row">
          {this.createFieldRow(numRow)}
        </div>
        );
     }.bind(this))
     return field;
  }*/
  
  render() {
   // console.log(this.state.squares)
    return (
      <div>
       {this.state.squares}
      </div>
    );
  }
}



class Game extends Component {
  constructor() {
    super();
    this.n = 4;
    this.size = 5;
    this.state = {
      squares: this.initField(this.size),
      stepNumber: 0,
      xIsNext: true
    };
  }
  initField(size) {
    var field = [];
    for(var i=0; i< size; i++) {
      field[i] = [];
      for(var j=0; j< size; j++) {
        field[i][j] = i+''+j;
      }
    }
    //console.log(field)
    return field;
    
  }
  handleClick(e,numRow, numCol) {
    //console.log(this.state.squares);
    console.dir(e.target);
    var newState = this.state.squares;
    newState[numRow][numCol] = 'check';
   // console.dir(newState)
    this.setState({
      squares: newState
    })
    //console.log(this.state.squares);
    //this.state.squares[numRow][numCol]
    //this.state.squares.
    
   /* const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });*/
  }

  jumpTo(step) {
    
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 ? false : true
    });
  }

  render() {
    //const history = this.state.history;
    //const current = history[this.state.stepNumber];
    const winner = calculateWinner(this.state.squares);

    /*const moves = history.map((step, move) => {
      const desc = move ? "Move #" + move : "Game start";
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });*/

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    //console.log(this.state.squares);
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.squares}
            onClick={(e,numRow, numCol) => this.handleClick(e,numRow, numCol)}
            n={this.n}
            size={this.size}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
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

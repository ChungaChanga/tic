class Game {
  handleClick() {
    var game = this;
    
  }
  render() {
    return(
      <Board onClick={this.handleClick}/> 
    );
  }
}
class Board {
  render() {
    return(
      <Board onClick={this.handleClick}/> 
    );
  }
}
class Square {
  
}
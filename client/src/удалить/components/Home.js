import React, { Component } from 'react';


class Home extends Component {
  
  constructor(props) {
    //console.log('off')
    //return null;
    super(props);
    this.state = {
      date: new Date()
    }
  };
  /*render() {
    return (
      <div className="home">
        <p>Ссылка: roomId={this.props.roomId}</p>
      </div>
    );
  }
  */
  
  componentDidMount() {
    //console.log('did')
    this.timerId = 
      setInterval(this.tick.bind(this), 1000);
  }
  tick() {
    this.setState( {date: new Date()})
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  render() {
     //setInterval(1000, this.state.timer.setState(new Date().toString()).bind(this));
    return (
      <div className="timer">
        время: {this.state.date.toString()}
      </div>
    )
  }
}

export default Home;
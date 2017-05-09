import React, { Component } from 'react';


class Home extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className="home">
        <p>Ссылка: roomId={this.props.roomId}</p>
      </div>
    );
  }
}

export default Home;
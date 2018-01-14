import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hello world</h1>
      <p>{this.props.msg}</p>
      </div>
    );
  }
}

export default App;

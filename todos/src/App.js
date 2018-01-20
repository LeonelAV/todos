import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <h1>ToDO App</h1>
        <AddNewtask />
        <ToDoAppList />
      </div>
    );
  }
}

export default App;

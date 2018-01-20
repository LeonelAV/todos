import React, { Component } from 'react';
import AddNewTask from './AddTask';
import ToDoAppList from './ToDoListApp';


class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <h1>ToDO App</h1>
        <AddNewTask />
        <ToDoAppList />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

export class ToDoAppList extends Component {
  constructor(){
    super();
  }
  render() {
    //items = this.props.tasks.map(()=> return <li>items)
    return (
      <ul>
        <li>Task 1 </li>
        <li>Task 2</li>
      </ul>
    );
  }
}


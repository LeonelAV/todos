import React, { Component } from 'react';

export class ToDoAppList extends Component {
  constructor(){
    super();
  }
  render() {
    var items = this.props.tasks.map((elem) => {
      return <li>{elem}</li>
    })
    return (
      <ul>
        {items}
      </ul>
    );
  }
}


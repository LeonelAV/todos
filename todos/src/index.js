import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var tasksList = ["task 1", "Task 2"]

ReactDOM.render(<App tasks={tasksList}/>,
 document.getElementById('root'));


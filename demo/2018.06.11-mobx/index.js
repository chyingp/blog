import * as ReactDOM from 'react-dom'
import * as React from 'react'
import ObservableTodoStore from './ObservableTodoStore'
import TodoList from './TodoList'

const observableTodoStore = new ObservableTodoStore();

ReactDOM.render(
  <TodoList store={ observableTodoStore } />,
  document.getElementById('reactjs-app')
);
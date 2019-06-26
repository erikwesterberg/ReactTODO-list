import React, { Component } from 'react';
import Header from './components/header'
import Todos from './components/todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wifie',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with Spotify',
        completed: false
      }
    ]
  }
// toggle completed 
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
    }) });
  }

  // delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });  
  }
  render() {
     return (
      <div className="App">
        <Header />
      <Todos todos={this.state.todos} markComplete={this.markComplete}
      delTodo={this.delTodo} />
    </div>
  );
 }
}

export default App;

import React, { Component } from 'react';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { ChainId } from '@uniswap/sdk'



class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Play with Ari",
        compleated: false,
      },
      {
        id: 2,
        title: "Make dinner",
        compleated: false,
      },
      {
        id: 3,
        title: "2 minutes",
        compleated: false,
      },
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.compleated = !todo.compleated;
        }
        return todo;
      })

    })
  }
  // Spread operator makes a copy of state because we can't change state
  deleteItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      compleated: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }


  render() {

    return (
      <div className="App" >
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default App;

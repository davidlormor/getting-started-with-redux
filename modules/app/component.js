import React, { Component } from 'react'
import store from '../../store'

let nextTodoId = 0

class App extends Component {
  render () {
    return (
      <div>
        <input ref={(node) => {
          this.input = node
        }} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          })
        }}>
          Add Todo
        </button>
        <ul>
          {this.props.todos.map((todo) =>
            <li key={todo.id} onClick={() => {
                store.dispatch({
                  type: 'TOGGLE_TODO',
                  id: todo.id
                })
              }}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'

import TodoList from './todo-list'

import store from '../../store'
import { getVisibleTodos } from './helpers'

class VisibleTodoList extends Component {
  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const { todos, visibilityFilter } = store.getState()
    const visibleTodos = getVisibleTodos(todos, visibilityFilter)

    return (
      <TodoList
        todos={visibleTodos}
        onTodoClick={(id) => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }}
      />
    )
  }
}

export default VisibleTodoList

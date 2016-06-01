import React, { Component, PropTypes } from 'react'

import TodoList from './todo-list'

import { getVisibleTodos } from './helpers'

class VisibleTodoList extends Component {
  componentDidMount () {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const { store } = this.context
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

VisibleTodoList.contextTypes = {
  store: PropTypes.object
}

export default VisibleTodoList

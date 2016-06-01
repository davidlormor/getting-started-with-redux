import React, { Component } from 'react'
import store from '../../store'

import TodoList from './todo-list'
import AddTodo from './add-todo'
import Footer from './footer'

import { getVisibleTodos } from './helpers'

let nextTodoId = 0

const App = ({ todos, visibilityFilter }) => {
  const visibleTodos = getVisibleTodos(todos, visibilityFilter)

  return (
    <div>
      <AddTodo
        onAddClick={(text) => {
          store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text
          })
        }}
      />
      <TodoList
        todos={visibleTodos}
        onTodoClick={(id) => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }}
      />
      <Footer
        visibilityFilter={visibilityFilter}
        onFilterClick={(filter) => {
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          })
        }}
      />
    </div>
  )
}

export default App

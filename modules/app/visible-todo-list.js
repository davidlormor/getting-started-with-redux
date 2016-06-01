import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import TodoList from './todo-list'

import { getVisibleTodos } from './helpers'

const mapStateToProps = ({ todos, visibilityFilter }) => {
  return {
    todos: getVisibleTodos(todos, visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch({
        type: 'TOGGLE_TODO',
        id
      })
    }
  }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList

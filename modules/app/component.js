import React, { Component } from 'react'
import store from '../../store'

import VisibleTodoList from './visible-todo-list'
import AddTodo from './add-todo'
import Footer from './footer'

const App = ({ store }) => {
  return (
    <div>
      <AddTodo store={store}/>
      <VisibleTodoList store={store}/>
      <Footer store={store}/>
    </div>
  )
}

export default App

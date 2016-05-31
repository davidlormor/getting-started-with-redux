import todos from './modules/todos/reducer'
import visibilityFilter from './modules/visibility-filter/reducer'

import { combineReducers, createStore } from 'redux'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

const store = createStore(todoApp)

console.log('Initial state.')
console.log(store.getState())
console.log('--------------')

console.log('Dispatching ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
})
console.log('Current state:')
console.log(store.getState())
console.log('--------------')

console.log('Dispatching ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Learn Redux'
})
console.log('Current state:')
console.log(store.getState())
console.log('--------------')

console.log('Dispatching TOGGLE_TODO')
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 1,
})
console.log('Current state:')
console.log(store.getState())
console.log('--------------')

console.log('Dispatching SET_VISIBILITY_FILTER')
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})
console.log('Current state:')
console.log(store.getState())
console.log('--------------')

import { combineReducers, createStore } from 'redux'
import todos from './modules/todos/reducer'
import visibilityFilter from './modules/visibility-filter/reducer'

const reducers = combineReducers({
  todos,
  visibilityFilter
})

const store = createStore(reducers)

export default store

import todo from '../todo/reducer'

export default (todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        newTodo(action)
      ]
    case 'TOGGLE_TODO':
      return todos.map((t) => todo(t, action))
    default:
      return todos
  }
}

const newTodo = ({ id, text, completed = false }) => {
  return { id, text, completed }
}

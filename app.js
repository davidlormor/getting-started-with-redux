export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        newTodo(action)
      ]
    default:
      return state
  }
}

const newTodo = ({ id, text, completed = false }) => {
  return { id, text, completed }
}

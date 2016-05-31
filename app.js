export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        newTodo(action)
      ]
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo
        }

        return toggle(todo)
      })
    default:
      return state
  }
}

const newTodo = ({ id, text, completed = false }) => {
  return { id, text, completed }
}

const toggle = (todo) => {
  return {
    ...todo,
    completed: !todo.completed
  }
}

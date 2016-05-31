export default (todo = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      if (todo.id !== action.id) {
        return todo
      }

      return toggle(todo)
    default:
      return todo
  }
}

const toggle = (todo) => {
  return {
    ...todo,
    completed: !todo.completed
  }
}

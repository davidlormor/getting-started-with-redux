export const todos = (todos = [], action) => {
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

export const todo = (todo = {}, action) => {
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

const newTodo = ({ id, text, completed = false }) => {
  return { id, text, completed }
}

const toggle = (todo) => {
  return {
    ...todo,
    completed: !todo.completed
  }
}

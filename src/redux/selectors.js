import { FILTER_TYPES } from "./constants";

export const getTodos = state => state.todo;
export const getFilter = state => state.filter;
export const getVisibleTodos = state => {
  const filter = getFilter(state);
  const todos = getTodos(state);
  switch (filter) {
    case FILTER_TYPES.all:
      return todos;
    case FILTER_TYPES.active:
      return todos.filter(task => !task.complete);
    case FILTER_TYPES.completed:
      return todos.filter(task => task.complete);
    default:
      return todos;
  }
};
export const getActiveTodo = state => {
    return state.todo.filter(task => !task.complete);
}
export const getCompletedTodo = state => {
    return state.todo.filter(task => task.complete);
}

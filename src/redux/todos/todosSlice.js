import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./todosOperations";
import { deleteTodos } from "./todosOperations";

const initialState = {
  error: null,
  loading: false,
  todos: [],
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
extraReducers: builder => {
    builder.addCase(fetchTodos.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });
    builder.addCase(deleteTodos.pending, state => {
      state.loading = true;
    });
    builder.addCase(deleteTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteTodos.fulfilled, (state, action) => {
      state.loading = false;
      // state.todos = action.payload;
    //  console.log(action.payload)
    state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    });
  }
});

export default todosSlice;
// export const { addToDo } = todosSlice.actions;  
// export const { removeToDo } = todosSlice.actions;
export const { toggleToDo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;

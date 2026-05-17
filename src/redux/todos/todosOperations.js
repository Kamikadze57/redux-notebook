import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://6a003d142b7ab349603029d5.mockapi.io/";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, thunkAPI) => {
    try {
      const fetchData = await axios.get("/todos");
      console.log(fetchData.data);
      return fetchData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTodos = createAsyncThunk(
  "todos/deleteTodos",
  async (todoId, thunkAPI) => {
    try {
      const fetchData = await axios.delete(`/todos/${todoId}`);
      return fetchData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

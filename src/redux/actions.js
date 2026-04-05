import { nanoid } from "nanoid";
import { ACTION_TYPES } from "./constants";

export const addToDo = text => {
  return {
    // reducerName/ActionName
    type: ACTION_TYPES.add,
    payload: {
      id: nanoid(),
      comlete: false,
      text: text,
    },
  };
};

export const toggleTodo = id => {
  return {
    type: ACTION_TYPES.toggle,
    payload: id,
  };
};

export const removeTodo = id => {
  return {
    type: ACTION_TYPES.remove,
    payload: id,
  };
};

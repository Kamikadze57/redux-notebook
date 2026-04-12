import { combineReducers } from "redux";
import { ACTION_TYPES } from "./constants";
// Мозок нашого додатку(Обчислення та перезапис)

const baseState = [
  { id: 1, complete: false, text: "Study Redux" },
  { id: 2, complete: false, text: "Study Redux" },
];

const todoReducer = (state = baseState, action) => {
  switch (action.type) {
    case ACTION_TYPES.add:
      return [...state, action.payload];
    case ACTION_TYPES.toggle:
      return state.map(task =>
        task.id === action.payload
          ? { ...task, complete: !task.complete }
          : task
      );
    case ACTION_TYPES.remove:
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};
const filterReducer = (state = baseState, action) => {
  switch (action.type) {
    case ACTION_TYPES.filter:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});

export default rootReducer;

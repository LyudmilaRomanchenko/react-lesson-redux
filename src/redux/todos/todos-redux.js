import { combineReducers } from "redux";
import types from "./todos-types";

const items = (state = [], { type, payload }) => {
  console.log([...state, payload]);
  switch (type) {
    case types.ADD:
      return [...state, payload];
    case types.DELETE:
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};

// console.log(items());

const filter = (state = "", action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
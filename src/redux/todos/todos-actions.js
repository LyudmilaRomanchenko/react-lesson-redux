/* eslint-disable import/no-anonymous-default-export */
import types from "./todos-types";
import shortid from "shortid";

const addTodo = (text) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    text,
    complited: false,
  },
});

const deleteTodo = (todoId) => ({
  type: types.DELETE,
  payload: todoId,
});

export default { addTodo, deleteTodo };

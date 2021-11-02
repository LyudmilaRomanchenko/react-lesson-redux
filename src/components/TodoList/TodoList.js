import React from "react";
import { connect } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";

function TodoList({ todos, onDeleteTodo }) {
  console.log(todos);
  return (
    <>
      <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>
            <p>{text}</p>
            <button type="button" onClick={() => onDeleteTodo(id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos.items,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (id) => dispatch(todosActions.deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

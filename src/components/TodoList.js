import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchTodosFromServer } from "../store/actions/todoActions";

//react hooks
const TodoList = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.fetchTodosFromServer();
  }, []);

  return !loading ? (
    props.todos.length > 0 ? (
      props.todos.map((todo) => <p key={todo.id}>{todo.task}</p>)
    ) : (
      <p>No todos available</p>
    )
  ) : (
    <p>Loading todos... Please wait...</p>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps, { fetchTodosFromServer })(TodoList);

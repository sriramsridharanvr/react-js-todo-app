import React, { useState, useEffect } from "react";
import axios from "axios";

//react hooks
const TodoList = (props) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodosFromServer();
  }, []);

  const fetchTodosFromServer = async () => {
    const url = "http://localhost:8080/api/todos";
    const response = await axios.get(url);
    setTodos(response.data);
    setLoading(false);
  };

  return !loading ? (
    todos.length > 0 ? (
      todos.map((todo) => <p key={todo.id}>{todo.task}</p>)
    ) : (
      <p>No todos available</p>
    )
  ) : (
    <p>Loading todos... Please wait...</p>
  );
};

export default TodoList;

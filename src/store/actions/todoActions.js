import { CREATE_TODO, GET_ALL_TODOS, DELETE_TODO } from "./types";
import axios from "axios";

export const fetchTodosFromServer = () => async (dispatch) => {
  const url = "http://localhost:8080/api/todos";
  const response = await axios.get(url);
  const todos = response.data;

  dispatch({
    type: GET_ALL_TODOS,
    payload: todos,
  });
};

export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: CREATE_TODO,
    payload: todo,
  });
};

import { CREATE_TODO, GET_ALL_TODOS, DELETE_TODO } from "../actions/types";

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

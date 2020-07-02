import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { addTodo } from "../store/actions/todoActions";

const textBoxStyle = {
  padding: "10px",
  marginRight: "5px",
};

const defaultValuesForTodo = {
  task: "Default text for todo",
  completed: false,
};

const CreateTodoForm = (props) => {
  const [todo, setTodo] = useState(defaultValuesForTodo);
  const [loading, setLoading] = useState(false);

  const createTodo = async (todo) => {
    const url = "http://localhost:8080/api/todos";
    const response = await axios.post(url, todo);
    props.addTodo(response.data);
  };

  const handleTodoTextChange = (e) => {
    const inputValue = e.target.value;

    setTodo({
      ...todo,
      task: inputValue,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createTodo(todo);
  };

  return (
    <div>
      <form>
        <label
          for="task"
          style={{
            marginRight: "10px",
          }}
        >
          Task Description
        </label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="What do you want to do?"
          value={todo.task}
          style={textBoxStyle}
          onChange={handleTodoTextChange}
        />
        <input
          type="submit"
          id="btn_submit"
          value="Add"
          onClick={handleFormSubmit}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default connect(null, { addTodo })(CreateTodoForm);

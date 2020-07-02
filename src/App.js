import React from "react";
import { connect } from "react-redux";
import Welcome from "./components/Welcome";
import TodoList from "./components/TodoList";
import CreateTodoForm from "./components/CreateTodoForm";

const App = (props) => {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <header className="App-header">
        <Welcome name="Ruksar" email="ruksar.banu@yethi.in" />
      </header>
      <div className="todo-list">
        <h3>Todos: {props.todos.length}</h3>
        <hr />
        <CreateTodoForm />
        <hr />
        <TodoList />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps, null)(App);

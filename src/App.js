import React from "react";
import Welcome from "./components/Welcome";
import TodoList from "./components/TodoList";

const user = {
  name: "Ruksar",
  email: "ruksar@yethi.in",
};

const initialTodoData = [
  {
    id: 1,
    completed: false,
    task: "My first todo",
  },
  {
    id: 2,
    completed: false,
    task: "My second todo",
  },
  {
    id: 3,
    completed: false,
    task: "My third todo",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome user={user} name="Ruksar" email="ruksar.banu@yethi.in" />
      </header>
      <div className="todo-list">
        <h3>Todos: 4</h3>
        <TodoList />
      </div>
    </div>
  );
}

export default App;

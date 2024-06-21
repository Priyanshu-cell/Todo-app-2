import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy milk",
      dueDate: "15/05/24",
    },
    {
      name: "Go to office",
      dueDate: "15/05/24",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AppTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;

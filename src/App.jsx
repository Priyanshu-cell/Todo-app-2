import { useState } from "react";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomMessage";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  const initodoItems = [
    {
      name: "Buy milk",
      dueDate: "15/05/24",
    },
    {
      name: "hello",
      dueDate: "23/07/24",
    },
  ];

  const [todoItems, setTodoItems] = useState(initodoItems);

  const handleNewItem = (itemName, dueDate) => {
    //console.log(`new item added: ${itemName} and ${dueDate}`);
    const newTodoItems = [...todoItems, { name: itemName, dueDate: dueDate }];
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <WelcomeMessage></WelcomeMessage>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;

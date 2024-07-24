import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addingTodo = (event) => {
    // setAddtodo(event.target.value);
    const inputTodo = event.target.value;
    setTodoName(inputTodo);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleOnClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <>
      <div className="container text-center">
        <div className="row my-row">
          <div className="col-6">
            <input
              type="text"
              value={todoName}
              placeholder="Enter Todo here "
              onChange={addingTodo}
            ></input>
          </div>
          <div className="col-4">
            <input
              type="date"
              value={dueDate}
              onChange={handleDateChange}
            ></input>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success my-button"
              onClick={handleOnClicked}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;

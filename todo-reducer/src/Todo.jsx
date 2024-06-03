import React from "react";

function Todo({ todo, dispatch, setTodo }) {
  const handleToggle = () => {
    dispatch({ type: "toggle", payload: { id: todo.id } });
  };

  const handleDelete = () => {
    dispatch({ type: "delete", payload: { id: todo.id } });
  };

  return (
    <div>
      <span>{todo.name}</span>
      <input type="checkbox" onChange={handleToggle}></input>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Todo;

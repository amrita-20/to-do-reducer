import { useState, useReducer } from "react";
import "./App.css";
import Todo from "./Todo";

const ACTIONS = {
  ADD: "add",
  DELETE: "delete",
  TOGGLE: "toggle",
};
let count = 1;

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, createNewTodo(action.payload.todo)];
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE:
      return todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    default:
      return todos;
  }
}

function createNewTodo(todo) {
  return { id: count++, name: todo, complete: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [todo, setTodo] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    setTodo("");
    dispatch({ type: ACTIONS.ADD, payload: { todo } });
  };

  return (
    <>
      <main>
        <form onSubmit={(event) => handleAddTodo(event)}>
          <label htmlFor="todo">Add To do</label>
          <input
            id="todo"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          ></input>
          <button type="submit">Add</button>
        </form>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
            setTodo={setTodo}
          />
        ))}
      </main>
    </>
  );
}

export default App;

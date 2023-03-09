import React, { useReducer, useState } from "react";
import { FiXCircle } from "react-icons/fi";
import "./ComReducer.css";

const initialState = {
  todos: [
    {
      id: 1,
      task: "reading",
    },
  ],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        todos: [
          ...state.todos,
          { id: state.todos.length + 1, task: action.todo },
        ],
      };

    case "REMOVE":
      return { todos: state.todos.filter((e) => e.id !== action.todoId) };

    case "EDIT":
      return {
        todos: state.todos.map((e) =>
          e.id === action.todo.id
            ? {
                id: action.todo.id,
                task: action.todo.task,
              }
            : e
        ),
      };
    default:
      break;
  }

  return state;
};
const ComReducer = () => {
  let [todoInput, setTodoInput] = useState("");
  let [todoEditId, setTodoEditId] = useState(null);
  let [todoEditTask, setTodoEditTask] = useState(null);
  let [state, dispatch] = useReducer(todoReducer, initialState);

  const handleTodo = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = () => {
    dispatch({
      type: "ADD",
      todo: todoInput,
    });

    setTodoInput("");
  };

  const handleDelete = (id) => {
    dispatch({
      type: "REMOVE",
      todoId: id,
    });
  };

  const handleEdit = (d) => {
    setTodoEditId(d.id);
    setTodoEditTask(d.task);
  };
  const handleEditChange = (e) => {
    setTodoEditTask(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch({
        type: "EDIT",
        todo: {
          id: todoEditId,
          task: todoEditTask,
        },
      });

      setTodoEditId(null);
      setTodoEditTask(null);
    }
  };
  return (
    <div className="main-wrapper">
      <h1>React Hooks - useReducer</h1>
      <div className="wrapper">
        <input type="text" value={todoInput} onChange={handleTodo} />

        <button onClick={handleSubmit}>Add</button>
      </div>

      <h4>Todo Task</h4>

      {console.log("RState", state)}
      {state?.todos?.map((e, i) => (
        <div key={i} className="wrapper">
          {todoEditId === e.id ? (
            <input
              type="text"
              value={todoEditTask}
              onChange={handleEditChange}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <>
              <p onClick={() => handleEdit(e)}>{e.task}</p>
              <FiXCircle
                className="delete-icon"
                onClick={() => handleDelete(e.id)}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ComReducer;

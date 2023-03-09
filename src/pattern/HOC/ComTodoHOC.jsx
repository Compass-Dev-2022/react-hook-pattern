import React from "react";
import HOC from "./HOC";

const ComTodoHOC = ({ state }) => {
  return (
    <div>
      {state.map((e, i) => (
        <p key={i}>{e.title}</p>
      ))}
    </div>
  );
};

const NewTodoHOC = HOC(ComTodoHOC, "todos");
export default NewTodoHOC;

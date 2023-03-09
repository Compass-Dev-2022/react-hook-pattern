import React, { useState } from "react";
import ComTodoHOC from "./ComTodoHOC";
import ComUsersHOC from "./ComUsersHOC";

const ComHOC = () => {
  let [state, setState] = useState(null);
  return (
    <div>
      <h1>Pattern - HOC</h1>
      <div>
        <button
          onClick={() => {
            setState(0);
          }}
        >
          Todo
        </button>
        <button
          onClick={() => {
            setState(1);
          }}
        >
          User
        </button>
      </div>

      {state === 0 ? <ComTodoHOC /> : state === 1 ? <ComUsersHOC /> : ""}
    </div>
  );
};

export default ComHOC;

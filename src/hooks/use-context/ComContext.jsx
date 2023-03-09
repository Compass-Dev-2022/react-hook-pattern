import React, { createContext, useState } from "react";
import ComA from "./ComA";
import { CONTEXT } from "./CreateContext";

const ComContext = () => {
  let [state, setState] = useState({
    title: "Hello!!!",
  });

  const initialState = {
    title: "Hello World",
  };

  return (
    <CONTEXT.Provider value={initialState}>
      <h1>React Hook - useContext</h1>
      <p>Main-Com Title-{state.title}</p>
      <ComA />
    </CONTEXT.Provider>
  );
};

export default ComContext;

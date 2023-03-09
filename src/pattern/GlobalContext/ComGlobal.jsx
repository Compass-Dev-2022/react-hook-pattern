import React from "react";
import ComA from "./ComA";
import { useBoolean } from "./GlobalContext";

const ComGlobal = () => {
  const [state, toggle] = useBoolean();

  return (
    <div>
      <p>Main-State {state.isBoolean.toString()}</p>

      <ComA />
    </div>
  );
};

export default ComGlobal;

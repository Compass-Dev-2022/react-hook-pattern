import React from "react";
import { useBoolean } from "./GlobalContext";

const ComC = () => {
  const [, toggle] = useBoolean();
  return (
    <div>
      ComC
      <button onClick={toggle.handleBoolean}>Change</button>
    </div>
  );
};

export default ComC;

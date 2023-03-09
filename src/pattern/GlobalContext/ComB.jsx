import React from "react";
import ComC from "./ComC";
import { useBoolean } from "./GlobalContext";

const ComB = () => {
  const [, toggle] = useBoolean();

  return (
    <div>
      ComB <button onClick={toggle.handleBoolean}>Change</button>
      <ComC />
    </div>
  );
};

export default ComB;

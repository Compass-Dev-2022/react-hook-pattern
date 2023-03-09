import React from "react";
import { useViewport } from "./custom-hook";

const ComCustomHook = () => {
  const { viewport } = useViewport();
  return (
    <div>
      <h1>React Hook - CustomHook</h1>

      <p>Current Width - {viewport.width}</p>
      <p>Device - {viewport.device}</p>
    </div>
  );
};

export default ComCustomHook;

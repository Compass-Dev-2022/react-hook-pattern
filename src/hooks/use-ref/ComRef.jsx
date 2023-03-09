import React, { useRef } from "react";

const ComRef = () => {
  const inputRef = useRef(null);

  console.log("Input Ref", inputRef);

  const handleFocus = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <h1>React Hook - useRef</h1>
      <input ref={inputRef} /> <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default ComRef;

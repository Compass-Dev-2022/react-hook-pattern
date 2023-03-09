import React, { useState } from "react";

const Com = () => {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>React Hook - useState</h1>
      <button
        onClick={() => {
          setCounter(++counter);
        }}
      >
        counter - {counter}
      </button>
    </div>
  );
};

export default Com;

import React, { useEffect, useState } from "react";

const ComEffect = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    console.log("Done");

    return () => {
      console.log("UnDone");
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div>
      <h1>React Hook - useEffect</h1>
      <p>Timer-{count}</p>
    </div>
  );
};

export default ComEffect;

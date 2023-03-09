import React, { useCallback, useState } from "react";
import Case1 from "./Case1";
import Case2 from "./Case2";

const ComCallback = () => {
  let [count, setCount] = useState(0);

  let [theme, setTheme] = useState("dark");

  const handleChangeCount = useCallback(() => {
    console.log("Count");
    setCount(++count);
  }, [count]);

  const handleChangeTheme = useCallback(() => {
    console.log("Theme");

    setTheme(theme === "dark" ? "white" : "dark");
  }, [theme]);

  return (
    <div>
      <h1>React Hook - useCallback</h1>

      {/* case 1 */}
      <Case1 handleChangeCount={handleChangeCount} count={count} />

      {/* case 2 */}

      <Case2 handleChangeTheme={handleChangeTheme} theme={theme} />
    </div>
  );
};

export default ComCallback;

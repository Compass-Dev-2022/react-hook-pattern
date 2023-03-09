import { memo } from "react";

const Case1 = ({ handleChangeCount, count }) => {
  console.log("Count rendering");

  return <button onClick={handleChangeCount}>Counter {count}</button>;
};
export default memo(Case1);

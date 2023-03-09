import { useContext } from "react";
import { CONTEXT } from "./CreateContext";

const ComC = () => {
  let { title } = useContext(CONTEXT);

  return (
    <>
      <p>ComC - Title -{title}</p>
    </>
  );
};

export default ComC;

import { useContext } from "react";
import ComC from "./ComC";
import { CONTEXT } from "./CreateContext";

const ComB = () => {
  let { title } = useContext(CONTEXT);

  return (
    <>
      <p>ComB - {title}</p>
      <ComC />
    </>
  );
};

export default ComB;

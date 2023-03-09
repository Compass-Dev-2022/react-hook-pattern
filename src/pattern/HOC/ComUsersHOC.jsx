import React from "react";
import HOC from "./HOC";

const ComUsers = ({ state }) => {
  return (
    <div>
      {state.map((e, i) => (
        <p key={i}>{e.name}</p>
      ))}
    </div>
  );
};

const NewUserHOC = HOC(ComUsers, "users");

export default NewUserHOC;

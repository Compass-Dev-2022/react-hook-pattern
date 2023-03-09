import React, { useEffect, useState } from "react";

const URL = `https://jsonplaceholder.typicode.com/users`;
const ComUsers = () => {
  let [state, setState] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let res = await fetch(URL);
      let data = await res.json();
      setState(data);
    };

    fetchData();
  }, [URL]);

  console.log("State", state);
  return (
    <div>
      {state.map((e, i) => (
        <p key={i}>{e.name}</p>
      ))}
    </div>
  );
};

export default ComUsers;

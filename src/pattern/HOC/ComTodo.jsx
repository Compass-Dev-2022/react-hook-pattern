import React, { useEffect, useState } from "react";

const URL = `https://jsonplaceholder.typicode.com/todos`;
const ComTodo = () => {
  let [state, setState] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let res = await fetch(URL);
      let data = await res.json();
      setState(data);
    };

    fetchData();
  }, [URL]);
  return (
    <div>
      {state.map((e, i) => (
        <p key={i}>{e.title}</p>
      ))}
    </div>
  );
};

export default ComTodo;

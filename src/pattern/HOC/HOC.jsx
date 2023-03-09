import React, { useEffect, useState } from "react";

const HOC = (OldCom, urlName) => {
  let URL = `https://jsonplaceholder.typicode.com/${urlName}`;

  const NewCom = () => {
    let [data, setData] = useState([]);
    useEffect(() => {
      let fetchData = async () => {
        let res = await fetch(URL);
        let data = await res.json();
        setData(data);
      };

      fetchData();
    }, [URL]);
    return <OldCom state={data} />;
  };
  return NewCom;
};

export default HOC;

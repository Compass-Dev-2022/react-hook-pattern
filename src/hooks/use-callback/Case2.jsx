import { memo } from "react";

const Case2 = ({ handleChangeTheme, theme }) => {
  console.log("Theme rendering");

  return <button onClick={handleChangeTheme}>Theme : {theme}</button>;
};

export default memo(Case2);

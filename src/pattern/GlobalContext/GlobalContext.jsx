import { createContext, useContext, useState } from "react";

export const CONTEXT = createContext();
export const useBoolean = () => {
  const { state, toggle } = useContext(CONTEXT);

  return [state, toggle];
};

const Global = ({ children }) => {
  const [isBoolean, setIsBoolean] = useState(false);

  let handleBoolean = () => {
    setIsBoolean(!isBoolean);
  };

  const initialState = {
    state: {
      isBoolean,
    },
    toggle: {
      handleBoolean,
    },
  };
  return <CONTEXT.Provider value={initialState}>{children}</CONTEXT.Provider>;
};

export default Global;

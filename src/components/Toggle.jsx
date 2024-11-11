/* eslint-disable react/prop-types */
import  { createContext, useContext, useState } from "react";


const ToggleContext = createContext();


export default function Toggle({ children }) {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive((prev) => !prev);

  return (
    <ToggleContext.Provider value={{ isActive, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}


Toggle.Active = function ToggleActive({ children }) {
  const { isActive } = useContext(ToggleContext);
  return isActive ? <div>{children}</div> : null;
};


Toggle.Inactive = function ToggleInactive({ children }) {
  const { isActive } = useContext(ToggleContext);
  return !isActive ? <div>{children}</div> : null;
};


Toggle.Button = function ToggleButton() {
  const { toggle } = useContext(ToggleContext);
  return (
    <button onClick={toggle}>
      Toggle
    </button>
  );
};

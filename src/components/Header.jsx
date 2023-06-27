import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Header = ({ category, title }) => {
   const {currentMode} = useStateContext()
  return (
    <div className="mb-10">
      <p className={`text-${currentMode === "Dark" ? "white" : "black"}`}>{category}</p>
      <p className={`text-3xl font-extrabold tracking-tight text-cyan-400`}>
        {title}
      </p>
    </div>
  );
};

export default Header;

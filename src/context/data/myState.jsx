/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import MyContext from "./myContext";

const myState = (props) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <MyContext.Provider value={{ toggleMode, mode }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default myState;

import React, { useContext } from "react";
import DComponent from "./DComponent";
import ThemeContext from "../../context/ThemeContext";

const CComponent = () => {
  // const { data } = useContext(ThemeContext);
  return (
    <div>
      {/* <h3>Component C - Current Theme: {data}</h3> */}
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      {/* <DComponent data={data} /> */}
      <h1>hello</h1>
    </div>
  );
};

export default CComponent;

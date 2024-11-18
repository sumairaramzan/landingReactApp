// import React, { createContext } from 'react';

// const ThemeContext = createContext();

// const ProviderTheme = ({ children }) => {
//     const data = "hello";
//     return (
//        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
//     );
// };

// export { ProviderTheme, ThemeContext };

import React from "react";

import { createContext } from "react";

const ThemeContext = createContext();

const ProviderTheme = ({ children }) => {
  const data = "hello world";

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ProviderTheme, ThemeContext };

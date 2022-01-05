export const Colors = {
  orange: "#f57c00",
  blue: "#008cff",
  black: "#222222",
  white: "#ffffff",
  mediumGray: "#6e6869",
  red: "#fc5c65",
};

import React from "react";

export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

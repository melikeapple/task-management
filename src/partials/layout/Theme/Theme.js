import React from "react";
import {
  ThemeProvider as SCThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { palette } from "../../../helpers";

const GlobalStyles = createGlobalStyle`
    body {
        background: ${palette("mode.backgroundColor")};
        font-family: ${palette("fonts.primary", 0)}, sans-serif;
    }
`;

const darkTheme = {
  mode: {
    backgroundColor: "#191921",
    textColor: "#FFFFFF",
  },
};
const lightTheme = {
  mode: {
    backgroundColor: "#FFFFFF",
    textColor: "#191921",
  },
};
const defaultTheme = {
  fonts: {
    primary: ["Montserrat"],
  },
  colors: {
    primary: ["#3CB371", "#444444", "#919191", "#D5D5D5", "#F2F1F1"],
    secondary: [
      "#178DFC",
      "#F07C10",
      "#F07C10",
      "#ED0A55",
      "#2AB1CD",
      "#5858D6",
      "#FFCC01",
    ],
  },
};

export const ThemeProvider = ({ children }) => {
  const mode = localStorage.getItem("mode");
  const theme = Object.assign(
    {},
    defaultTheme,
    mode === "light" ? lightTheme : darkTheme
  );
  console.log("theme", theme);
  return (
    <SCThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </SCThemeProvider>
  );
};

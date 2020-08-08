import React from "react";
import { hot } from "react-hot-loader/root";
import { Router } from "./router/Router";
import { ThemeProvider } from "./partials/layout/Theme/Theme";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default hot(App);

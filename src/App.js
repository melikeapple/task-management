import React from "react";
import { hot } from "react-hot-loader/root";
import { Router } from "./router/Router";
import { ThemeProvider } from "./partials/layout/Theme/Theme";
import I18nProvider from "./i18n/i18nProvider";

function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </I18nProvider>
  );
}

export default hot(App);

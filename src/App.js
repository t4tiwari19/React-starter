import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/index";
import RAF from "./views/RAF/RAF.view";
import AppWrapper from "./App.styles.js";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <RAF />
      </AppWrapper>
    </ThemeProvider>
  );
};
export default App;

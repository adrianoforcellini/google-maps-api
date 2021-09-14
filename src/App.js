import React from 'react';
import Home from "./pages/Home";
import theme from "./theme.js";
import { ThemeProvider } from "styled-components";
// import { Reset } from "styled-reset";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
export default App;

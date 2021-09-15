import React from "react";
import Home from "./pages/Home";
import theme from "./theme.js";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}
export default App;

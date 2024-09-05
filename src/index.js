import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#0093E9",
      light: "#80D0C7",
      dark: "#165e7d",
    },
    secondary: {
      main: "#f50057",
    },
  },
};
const theme = createTheme(themeOptions);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './MUI/theme'
import {ThemeProvider} from "@mui/material";
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { CountryProvider } from "./components/CreateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountryProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </CountryProvider>
  </React.StrictMode>
);

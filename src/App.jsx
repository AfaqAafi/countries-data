import { Box } from "@mui/material";
import Header from "../../countries-app/src/components/Header/Header";
import theme from "../../countries-app/src/MUI/theme";
import CardComponent from "./components/card/Card";
import { Route, Routes } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import { useState } from "react";

const App = () => {
  const [toggleDark, settoggleDark] = useState(false);
  return (
    <>
      <Box
        sx={{
          backgroundColor: toggleDark
            ? theme.palette.primary.main
            : theme.palette.primary.veryLight,
          width: "100%",
          minHeight: "100vh",
          color: toggleDark ? theme.palette.primary.white : "",
        }}
      >
        <Header toggleDark={toggleDark} settoggleDark={settoggleDark} />
        <Routes>
          <Route path="/" element={<CardComponent toggleDark={toggleDark} />} />
          <Route
            path="/country/:code"
            element={<CountryDetail toggleDark={toggleDark} />}
          />
        </Routes>
      </Box>
    </>
  );
};

export default App;

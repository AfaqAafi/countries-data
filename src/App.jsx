import { Box } from "@mui/material";
import Header from "../../countries-app/src/components/Header/Header";
import theme from "../../countries-app/src/MUI/theme";
import CardComponent from "./components/card/Card";
import { Route, Routes } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";

const App = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.veryLight,
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<CardComponent />} />
          <Route path="/country/:code" element={<CountryDetail />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;

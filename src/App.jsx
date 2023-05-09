import { Box } from "@mui/material";
import Header from "../../countries-app/src/components/Header/Header";
import theme from "../../countries-app/src/MUI/theme";
import SearchBar from "../../countries-app/src/components/SearchBar/searchBar";

const App = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.veryLight,
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Header />
      <SearchBar />
    </Box>
  );
};

export default App;
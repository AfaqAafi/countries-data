import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  
  const topRegion = [
    { label: "Africa" },
    { label: "America"},
    { label: "Asia" },
    { label: "Europe" },
    { label: "Oceania"},
  ];
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        width: "100%",
        margin: "0 auto",
        paddingInline: "15px",
        pt: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          ".MuiInputBase-input": {
            borderRadius: "12px",
            maxWidth: "400px",
            "::placeholder": {
              fontSize: "16px",
              color: "#333",
              fontWeight: "400",
            },
          },
          ".MuiFilledInput-input": {
            padding: "7px 175px 7px 10px",
          },
          ".MuiInputBase-root": {
            display: "flex",
            alignItems: "baseline",
          },
          ".MuiFilledInput-underline:before": {
            border: "none !important",
          },
          ".MuiFilledInput-underline:after": {
            border: "none !important",
          },
        }}
      >
        <TextField
          id="filled-basic"
          variant="filled"
          placeholder="Search for country..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            minWidth: 170,
            backgroundColor: "white",
            ".MuiInputLabel-root": {
              marginTop: "-9px",
              fontSize: "16px",
              color: "#000",
            },
            ".MuiOutlinedInput-input": {
              padding: "0",
              cursor: "pointer",
            },

            "label[data-shrink=false]+.MuiInputBase-formControl .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input":
              {
                padding: "0",
              },

            ".MuiOutlinedInput-notchedOutline ": {
              border: "none",
              borderRadius: "4px",
              boxShadow: 2,
            },
          }}
        >
          <Autocomplete
            id="combo-box-demo"
            options={topRegion}
            renderInput={(params) => (
              <TextField {...params} label="Filter by Region" />
            )}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;

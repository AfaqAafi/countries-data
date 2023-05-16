import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import data from "../../../data.json";
const SearchBar = ({ onRegionFilter, setFilteredData }) => {
  const topRegion = [
    { label: "Africa", value: "Africa" },
    { label: "America", value: "America" },
    { label: "Asia", value: "Asia" },
    { label: "Europe", value: "Europe" },
    { label: "Oceania", value: "Oceania" },
  ];
  const handleCountrySearch = (event) => {
    const userInput = event.target.value.toLowerCase();
    const filteredDataItems = data.filter((country) => {
      return country.name.toLowerCase().includes(userInput);
    });
    setFilteredData(filteredDataItems);
  };

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
          alignItems: { xs: "flex-start", md: "center" },
          flexDirection: { xs: "column", md: "row" },
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
          ".css-1h51icj-MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-input":
            {
              padding: "0",
            },
        }}
      >
        <TextField
          id="filled-basic"
          variant="filled"
          placeholder="Search for country..."
          onChange={handleCountrySearch}
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
            marginTop: { xs: "20px", md: "0" },
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
            onChange={(event, newValue) =>
              onRegionFilter(event, newValue?.value)
            }
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

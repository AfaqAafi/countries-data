import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import data from "../../../data.json";
import { useContext, useState } from "react";
import SearchBar from "../SearchBar/searchBar";
import { Link } from "react-router-dom";
import { CountryContext } from "../CreateContext";

const CardComponent = () => {
  const { filteredData, setFilteredData } = useContext(CountryContext);
  const handleRegionFilter = (event, selectedRegion) => {
    event.preventDefault();
    if (selectedRegion) {
      const filteredDataItems = data.filter((country) => {
        return country.region === selectedRegion;
      });
      setFilteredData(filteredDataItems);
    } else {
      setFilteredData(data);
    }
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
      <Box sx={{ marginBottom: "30px" }}>
        <SearchBar
          countries={data}
          setFilteredData={setFilteredData}
          filteredData={filteredData}
          onRegionFilter={handleRegionFilter}
        />
      </Box>
      <Grid container spacing={3}>
        {filteredData.map((country) => {
          const { alpha3Code, name, population, region, flag, capital } =
            country;
          return (
            <Grid
              item
              key={alpha3Code}
              sx={{
                marginInline: "auto",
              }}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <Link
                to={`/country/${alpha3Code}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    maxWidth: 300,
                    marginInline: { xs: "auto", sm: "none" },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={flag}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                      >
                        {name}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <Typography component="span" sx={{ fontSize: "16px" }}>
                          Population:
                        </Typography>
                        <Typography
                          component="span"
                          sx={{
                            fontWeight: 100,
                            fontSize: "14px",
                            color: "gray",
                          }}
                        >
                          {population}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <Typography component="span" sx={{ fontSize: "16px" }}>
                          Region:
                        </Typography>
                        <Typography
                          component="span"
                          sx={{
                            fontWeight: 100,
                            fontSize: "14px",
                            color: "gray",
                          }}
                        >
                          {region}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <Typography component="span" sx={{ fontSize: "16px" }}>
                          Capital:
                        </Typography>
                        <Typography
                          component="span"
                          sx={{
                            fontWeight: 100,
                            fontSize: "14px",
                            color: "gray",
                          }}
                        >
                          {capital}
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CardComponent;

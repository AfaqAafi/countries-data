import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "./BackButton";
import { useContext } from "react";
import { CountryContext } from "./CreateContext";

const CountryDetail = () => {
  const { filteredData, toggleDark } = useContext(CountryContext);
  const { code } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  // Get the country details based on the code parameter
  const country = filteredData.find((country) => country.alpha3Code === code);

  // Destructure the required country details
  const {
    name,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;
  console.log(country);
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        width: "100%",
        margin: "0 auto",
        paddingInline: "15px",
        pt: 5,
        pb: 7,
      }}
    >
      <BackButton text={"Back"} icon onClick={handleClick} toggleDark />
      <Box
        sx={{
          marginTop: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          flexDirection: { lg: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            "&>img": {
              width: "500px",
            },
          }}
        >
          <img src={country.flags.svg} alt={country.name} />
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: { lg: "row", xs: "column" },
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <Box>
                <Typography
                  sx={{
                    marginBottom: "40px",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  {name}
                </Typography>
                <Typography component="span" sx={{ fontSize: "16px", mr: 1 }}>
                  Native Name:
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 100,
                    fontSize: "14px",
                    pb: 2,
                    display: "inline-block",
                    color: "gray",
                  }}
                >
                  <span> </span> {country.nativeName}
                </Typography>
              </Box>
              <Box>
                <Typography component="span" sx={{ fontSize: "16px", mr: 1 }}>
                  Population:
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 100,
                    pb: 2,
                    fontSize: "14px",
                    color: "gray",
                    display: "inline-block",
                  }}
                >
                  <span></span> {population}
                </Typography>
              </Box>
              <Box>
                <Typography component="span" sx={{ fontSize: "16px", mr: 1 }}>
                  Region:
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 100,
                    pb: 2,
                    display: "inline-block",
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  <span></span> {region}
                </Typography>
              </Box>
              <Box>
                <Typography component="span" sx={{ fontSize: "16px", mr: 1 }}>
                  Sub Region:
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 100,
                    pb: 2,
                    display: "inline-block",
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  <span></span> {subregion}
                </Typography>
              </Box>
              <Box>
                <Typography component="span" sx={{ fontSize: "16px", mr: 1 }}>
                  Capital:
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 100,
                    pb: 2,
                    display: "inline-block",
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  <span></span> {capital}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginTop: { xs: "20px", lg: "0px" },
              }}
            >
              <Box>
                <Typography component="span" sx={{ fontSize: "16px", mr: 1 }}>
                  Top Level Domain:
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 100,
                    fontSize: "14px",
                    pb: 2,
                    display: "inline-block",
                    color: "gray",
                  }}
                >
                  <span> </span> {topLevelDomain.join(", ")}
                </Typography>
              </Box>
              <Box>
                <Typography component="span" sx={{ fontSize: "16px", mr: 1 }}>
                  Currencies:
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 100,
                    pb: 2,
                    fontSize: "14px",
                    color: "gray",
                    display: "inline-block",
                  }}
                >
                  <span></span>{" "}
                  {currencies.map((currency) => currency.name).join(", ")}
                </Typography>
              </Box>
              <Box>
                <Typography component="span" sx={{ fontSize: "16px", mr: 1 }}>
                  Language:
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 100,
                    pb: 2,
                    display: "inline-block",
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  <span></span>{" "}
                  {languages.map((language) => language.name).join(", ")}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { lg: "row", xs: "column" },
              mt: { xs: 2, lg: 5 },
            }}
          >
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "bold",
                mr: 3,
                mb: { xs: 2, lg: 0 },
                textAlign: "left",
                alignSelf: "flex-start",
              }}
            >
              Border Countries:{" "}
            </Typography>
            <Box sx={{ display: "flex", gap: "7px" }}>
              {borders?.slice(0, 3).map((border) => (
                <BackButton key={border} text={border} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CountryDetail;

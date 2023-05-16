import { Box, Typography } from '@mui/material'
import theme from '../../MUI/theme';
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
const Header = ({ toggleDark, settoggleDark }) => {
  const handleChangeClr = () => {
    settoggleDark(!toggleDark);
  };

  return (
    <Box
      sx={{
        backgroundColor: toggleDark
          ? theme.palette.primary.darkBlue
          : theme.palette.primary.white,
        color: toggleDark ? theme.palette.primary.white : "",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
        zIndex: 1,
      }}
    >
      {/* header maxwidth div */}
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "0 auto",
          minHeight: "60px",
          lineHeight: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: "15px",
        }}
      >
        <Typography variant="h1">Where in the world?</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            cursor: "pointer",
          }}
          onClick={() => handleChangeClr()}
        >
          <BedtimeOutlinedIcon sx={{ fontSize: "22px" }} />
          <Typography variant="body">Dark Mode</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header
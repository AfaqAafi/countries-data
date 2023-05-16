import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = ({ text, icon, onClick }) => {
  return (
    <Button
      onClick={onClick}
      startIcon={icon && <ArrowBackIcon />}
      sx={{
        padding: "2px 24px",
        backgroundColor: "#ffffff",
        borderRadius: "4px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        color: "#333",
        "&:hover": {
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default BackButton;

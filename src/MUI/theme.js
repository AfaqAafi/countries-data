import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "1.4rem", // Add custom font size for h1
      fontWeight: "bold",
      '@media (max-width: 768px)': {
         fontSize: "1rem",  
         fontWeight: 600,
       }
      },
    body: {
      fontSize: ".9rem", // Add custom font size for h2
    },
  },
  palette: {
    primary: {
      main: "hsl(209, 23%, 22%)", //  Dark Blue (Dark Mode Elements)
      darkBlue: "hsl(207, 26%, 17%)", // Very Dark Blue (Dark Mode Background)
      veryDarkBlue: "hsl(200, 15%, 8%)", // Very Dark Blue (Light Mode Text):
      darkGray: "hsl(0, 0%, 52%)", // Dark Gray (Light Mode Input):
      veryLight: "hsl(0, 0%, 98%)", // Very Light Gray (Light Mode Background):
      white: " hsl(0, 0%, 100%)", // White (Dark Mode Text & Light Mode Elements)
    },
  },
});

export default theme;
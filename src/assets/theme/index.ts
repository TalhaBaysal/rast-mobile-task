import { createTheme } from "@mui/material/styles";

// Create a theme
export const theme = createTheme({
  // Color palette
  palette: {
    primary: {
      main: "#744BFC", // Main color
    },
    secondary: {
      main: "#FFF", // Secondary color
    },
  },
  // Components
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Preserve button text casing
        },
      },
    },
  },
});

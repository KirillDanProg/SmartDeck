import {createTheme} from "@mui/material/styles";
import {blueGrey, grey} from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: blueGrey,
    secondary: grey,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },

  typography: {
    fontFamily: "Montserrat"
  }
});

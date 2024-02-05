import {createTheme} from "@mui/material/styles";
import {blueGrey, grey} from "@mui/material/colors";
import {PaletteMode, ThemeProvider} from "@mui/material";
import * as React from "react";

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: "dark" | "light";
}

export const ColorModelContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: "light"
});

// @ts-ignore
export const ColorModelContextProvider = ({children}) => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
      mode
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: blueGrey,
          secondary: grey,
          contrastThreshold: 3,
          tonalOffset: 0.2
        },
        typography: {
          fontFamily: "Montserrat"
        }
      }),
    [mode]
  );

  return (
    <ColorModelContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModelContext.Provider>
  );
};

export const useColorMode = () => React.useContext(ColorModelContext);

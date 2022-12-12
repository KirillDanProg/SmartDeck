import {createTheme} from '@mui/material/styles';
import {blueGrey, grey} from "@mui/material/colors";
import {PaletteMode} from "@mui/material";

export class ThemeModeToggle {
    private _mode: PaletteMode = "light";

    get mode(): PaletteMode {
        return this._mode;
    }

    set mode(value: PaletteMode) {
        this._mode = value;
    }

}

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: blueGrey,
        secondary: grey,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily: "Montserrat",
    }
});

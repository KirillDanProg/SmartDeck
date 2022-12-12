import React from 'react';
import './App.css';
import {AppRoutes} from '../layout/AppRoutes/AppRoutes';
import {Header} from '../layout/Header/Header';
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";


function App() {
    return (
        <ThemeProvider theme={theme}>

            <Header/>

            <AppRoutes/>

        </ThemeProvider>
    )
}

export default App;

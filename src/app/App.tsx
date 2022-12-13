import React, {useEffect} from 'react';
import './App.css';
import {AppRoutes} from '../layout/AppRoutes/AppRoutes';
import {Header} from '../layout/Header/Header';
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";
import {useAppSelector} from "./hooks";
import {useAuthMeMutation} from "../features/auth/authAPI";
import {BasicModal} from "../common/components/ModalWindow";
import {selectCurrentError} from "../features/auth/authSlice";
import CssBaseline from "@mui/material/CssBaseline";

function App() {

    const token = useAppSelector(state => state.auth.token)

    const errorMessage = useAppSelector(selectCurrentError)?.message

    const [authMe] = useAuthMeMutation()

    useEffect(() => {
        if(token) {
            authMe(token).unwrap()
        }
    }, [])

    return (
        <ThemeProvider theme={theme}>

                <CssBaseline/>
                {errorMessage && <BasicModal modalTitle="Something went wrong"
                                             modalText={errorMessage}/>}

                <Header/>

                <AppRoutes/>

        </ThemeProvider>
    )
}

export default App;

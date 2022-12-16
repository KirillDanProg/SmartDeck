import React, { useEffect} from 'react';
import './App.css';
import {AppRoutes} from '../layout/AppRoutes/AppRoutes';
import {Header} from '../layout/Header/Header';
import {useAppSelector} from "./hooks";
import {BasicModal} from "../common/components/ModalWindow";
import {selectCurrentError, selectCurrentStatus} from "../features/auth/authSlice";
import CssBaseline from "@mui/material/CssBaseline";
import {serverErrorHandler} from "./utils/serverErrorTransformed";
import {Preloader} from "../common/components/Preloader";
import {useAuthMeMutation} from "../features/auth/authApi";
import { ColorModelContextProvider} from "../layout/Header/ColorModeContext";

function App() {

    const error = useAppSelector(selectCurrentError)

    const status = useAppSelector(selectCurrentStatus)

    const [authMe] = useAuthMeMutation()

    useEffect(() => {
        authMe("").unwrap()
    }, [])

    return (
        <ColorModelContextProvider>

            <CssBaseline/>
            {error && <BasicModal modalTitle="Something went wrong"
                                  modalText={serverErrorHandler(error)}/>}

            {status === "loading"
                ? <Preloader/>
                : <>
                    <Header/>

                    <AppRoutes/>
                </>
            }
        </ColorModelContextProvider>
    )
}

export default App;

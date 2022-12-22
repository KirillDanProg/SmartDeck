import './App.css';
import {AppRoutes} from '../layout/AppRoutes/AppRoutes';
import {Header} from '../layout/Header/Header';
import {useAppSelector} from '../common/hooks';
import {selectCurrentError, selectCurrentStatus} from '../features/auth/authSlice';
import {BasicModal} from '../common/components/ModalWindow';
import {serverErrorHandler} from '../common/utils/serverErrorTransformed';
import {useAuthMeMutation} from '../features/auth/authApi';
import {ColorModelContextProvider} from '../layout/Header/ColorModeContext';
import CssBaseline from '@mui/material/CssBaseline';
import React, {useEffect} from 'react';
import {ErrorSnackbar} from "../common/components/ErrorSnackbar";
import {LoginSkeleton} from "../common/components/Skeletons/LoginSkeleton";

function App() {

    const error = useAppSelector(selectCurrentError)

    const status = useAppSelector(selectCurrentStatus)

    const [authMe, {}] = useAuthMeMutation()

    useEffect(() => {
        authMe('').unwrap()
    }, [])

    return (
        <ColorModelContextProvider>
            <CssBaseline/>
            {
                error && <ErrorSnackbar errorMessage={serverErrorHandler(error)}/>
            }
            {status === 'loading'
                ? <LoginSkeleton/>
                : <>
                    <Header/>
                    <AppRoutes/>
                </>
            }
        </ColorModelContextProvider>
    )
}

export default App;

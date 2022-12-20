import './App.css';
import {AppRoutes} from '../layout/AppRoutes/AppRoutes';
import {Header} from '../layout/Header/Header';
import {useAppSelector} from '../common/hooks';
import {BasicModal} from '../common/components/ModalWindow';
import {selectCurrentError} from '../features/auth/authSlice';
import {serverErrorHandler} from '../common/utils/serverErrorTransformed';
import {useAuthMeMutation} from '../features/auth/authApi';
import { ColorModelContextProvider} from '../layout/Header/ColorModeContext';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useEffect} from 'react';
import {LoginSkeleton} from "../common/components/Skeletons/LoginSkeleton";

function App() {

  const error = useAppSelector(selectCurrentError)

  const [authMe, {isLoading}] = useAuthMeMutation()

  useEffect(() => {
    authMe('').unwrap()
  }, [])

  return (
    <ColorModelContextProvider>
      <CssBaseline/>
      {error && <BasicModal modalTitle="Something went wrong"
        modalText={serverErrorHandler(error)}/>}
      {isLoading
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

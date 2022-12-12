import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRegisterMutation, IRegisterRequest} from "./authAPI";
import {BasicModal} from "../../common/components/ModalWindow";
import {useEffect} from "react";
import {PATH} from "../../layout/AppRoutes/routes";
import {useRedirectTo} from "../../app/hooks/useRedirectTo";
import {saveToLocalStorage} from "../../app/utils/local-storage";
import {useAppSelector} from "../../app/hooks";
import {selectCurrentUser} from "./authSlice";
import {Form} from '../../common/components/form/Form';


export const SignUpPage = () => {

    const [register, {error, isSuccess, isLoading}] = useRegisterMutation()

    const userId = useAppSelector(selectCurrentUser)

    //todo: types
   async function signUpHandler(data: IRegisterRequest) {
       await register(data)
    }

    useRedirectTo(`/${PATH.LOGIN}`, !!userId, [isLoading])

    useEffect(() => {
        saveToLocalStorage("id", userId)
    }, [isSuccess])

    return (
        <Grid container component="main" sx={{height: '100vh'}}>
            {error && <BasicModal modalTitle="Something went wrong"
                                  modalText="Invalid email or password"
            />}
            <CssBaseline/>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Form formType="sign-up" callback={signUpHandler}/>
                </Box>
            </Grid>
        </Grid>
    );
}
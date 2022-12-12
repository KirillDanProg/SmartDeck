import * as React from 'react';
import {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import s from './SignInPage.module.css'
import {Form} from '../../../common/components/form/Form';
import {IRegisterRequest, useRegisterMutation} from '../authAPI';
import {PATH} from '../../../layout/AppRoutes/routes';
import {useRedirectTo} from '../../../app/hooks/useRedirectTo';
import {BasicModal} from '../../../common/components/ModalWindow';
import {useAppSelector} from '../../../app/hooks';
import {selectCurrentUser} from '../authSlice';


export const SignInPage = () => {
    const [login, {error, isLoading}] = useRegisterMutation()
    async function signInHandler(data: IRegisterRequest) {
        await login(data)
    }
    const userId = useAppSelector(selectCurrentUser)
    useRedirectTo(`/${PATH.PROFILE}`, !!userId, [isLoading])
    return (
        <Grid container component="main" sx={{height: '80vh'}}>
            {error && <BasicModal modalTitle="Something went wrong"
                                  modalText="Invalid email or password"
            />}
            <CssBaseline/>
            <Grid
                item
                xs={false}
                sm={4}
                md={4}
            />
            <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                <div className={s.container}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h3">
                            Sign in
                        </Typography>
                        <Form formType="sign-in" callback={signInHandler}/>
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}
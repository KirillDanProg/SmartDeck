import * as React from 'react';
import {useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import s from './SignInPage.module.css'
import {Form} from '../../../common/components/form/Form';
import {ILoginRequest, useLoginMutation} from '../appAPI';
import {BasicModal} from '../../../common/components/ModalWindow';
import {saveToLocalStorage} from '../../../app/utils/local-storage';
import {useRedirectTo} from '../../../app/hooks/useRedirectTo';
import {PATH} from '../../../layout/AppRoutes/routes';


export const SignInPage = () => {

    const [login, {error, isSuccess, data}] = useLoginMutation();

    async function signInHandler(formData: ILoginRequest) {
        await login(formData)
    }

    const token = data?.token;
    useRedirectTo(`/${PATH.PROFILE}`, !!token, [isSuccess]);
    useEffect(() => {
        saveToLocalStorage('token', token)
    }, [isSuccess])
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
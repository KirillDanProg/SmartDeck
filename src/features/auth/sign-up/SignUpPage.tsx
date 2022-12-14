import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {PATH} from '../../../layout/AppRoutes/routes';
import {useRedirectTo} from '../../../app/hooks/useRedirectTo';
import {Form} from '../../../common/components/form/Form';
import {IRegisterRequest} from "../authModels";
import {useRegisterMutation} from "../authApi";


export const SignUpPage = () => {

    const [register, {isSuccess}] = useRegisterMutation()

    //todo: types
    async function signUpHandler(data: IRegisterRequest) {
        await register(data).unwrap()
    }

    useRedirectTo(`/${PATH.LOGIN}`, isSuccess, [isSuccess])

    return (
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
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}/>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Form formType="sign-up" callback={signUpHandler}/>
                </Box>
            </Grid>
    );
}
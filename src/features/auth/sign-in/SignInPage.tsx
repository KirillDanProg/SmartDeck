import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Form} from '../../../common/components/form/Form';
import {useRedirectTo} from '../../../app/hooks/useRedirectTo';
import {PATH} from '../../../layout/AppRoutes/routes';
import {useAppSelector} from "../../../app/hooks";
import {selectCurrentUser} from "../authSlice";
import Avatar from "@mui/material/Avatar";
import {ILoginRequest} from "../authModels";
import {useLoginMutation} from "../authApi";

export const SignInPage = () => {

    const [login, {isSuccess}] = useLoginMutation();

    const userId = useAppSelector(selectCurrentUser)

    async function signInHandler(formData: ILoginRequest) {
        await login(formData).unwrap()
    }

    useRedirectTo(`/${PATH.PROFILE}`, !!userId, [isSuccess]);

    return (
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
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
                    Sign in
                </Typography>
                <Form formType="sign-in" callback={signInHandler}/>
            </Box>
        </Grid>
    );
}
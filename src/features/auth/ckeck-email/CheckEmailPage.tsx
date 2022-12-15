import * as React from 'react';
import {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import s from '../sign-in/SignInPage.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import checkEmail from '../../../assets/icons/checkEmail.png'
import Button from '@mui/material/Button';
import {PATH} from '../../../layout/AppRoutes/routes';
import {getFromLocalStorage} from '../../../app/utils/local-storage';
import {Link} from "react-router-dom";


export const CheckEmailPage = () => {
    const [email, setEmail] = useState<string>();

    useEffect(() => {
        let receivedEmail = getFromLocalStorage('email');
        if (receivedEmail) {
            setEmail(receivedEmail)
        }
    }, [])

    return (
        <Grid container component="main" sx={{height: '80vh'}}>
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
                            my: 10,
                            mx: 4,
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gridTemplateRows: '100px 230px 50px 50px 80px 1fr',
                            alignItems: 'center',
                            justifyItems: 'center'
                        }}
                    >
                                    <Typography component="h1" variant="h3">
                                        Check email
                                    </Typography>
                                <img style={{maxWidth: '200px'}} src={checkEmail} alt=""/>
                                <Typography component="h3" variant="h5">
                                We`ve sent an Email with instructions to
                                </Typography>
                                <Typography component="h3" variant="h5">
                            {
                                email ? email : <h3>error</h3>
                            }
                                </Typography>
                                <Button
                                component={Link}
                                to={PATH.LOGIN}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                >
                                Back to login
                                </Button>
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}
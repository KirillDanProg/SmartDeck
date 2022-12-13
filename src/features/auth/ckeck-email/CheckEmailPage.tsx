import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import s from '../sign-in/SignInPage.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import checkEmail from '../../../assets/icons/checkEmail.png'
import Button from '@mui/material/Button';


export const CheckEmailPage = () => {

    // const [register, {error, isSuccess, isLoading}] = useRegisterMutation()
    //
    // const userId = useAppSelector(selectCurrentUser)
    //
    // //todo: types
    // async function signUpHandler(data: IRegisterRequest) {
    //     await register(data)
    // }

    // useRedirectTo(`/${PATH.LOGIN}`, !!userId, [isLoading])

    // useEffect(() => {
    //     saveToLocalStorage('id', userId)
    // }, [isSuccess])

    return (
        <Grid container component="main" sx={{height: '80vh'}}>
            {/*{error && <BasicModal modalTitle="Something went wrong"*/}
            {/*                      modalText="Invalid email or password"*/}
            {/*/>}*/}
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
                            Check email
                        </Typography>
                        <img style={{maxWidth:'200px'}} src={checkEmail} alt=""/>
                        <Typography component="h3" variant="h5">
                            We`ve sent an Email with instructions to
                        </Typography>
                        <Typography component="h3" variant="h5">
                            dimakurgan123789@gmail.com
                        </Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >Back to login</Button>

                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import {FormikErrors, useFormik} from 'formik';
import {InputAdornment} from '@mui/material';
import {PasswordVisibleIcon} from '../../../common/components/PasswordVisible';
import {validationSchema} from '../../../app/utils/yupValidation';
import {validationSchema} from '../../../common/components/form/yupValidation';
import s from './SignInPage.module.css'


export type ResponseLoginType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
// количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}


export const SignInPage = () => {
    const [isShown, setIsShown] = useState(false)
    const formik = useFormik({
        validate: (values: LoginParamsType) => {
            let errors: FormikErrors<LoginParamsType> = {};
            if (!values.email) {
                errors.email = 'Email is required!'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Password is required!'
            }
            return errors
        },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema,
        onSubmit: async (values) => {
            // await register(values)
        }
    });
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
                        <Box component="form" onSubmit={formik.handleSubmit} sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                id="email"
                                label="Email Address"
                                {...formik.getFieldProps('email')}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                label="Password"
                                // type={passwordType}
                                id="password"
                                {...formik.getFieldProps('password')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <PasswordVisibleIcon isShown={isShown} setShown={setIsShown}/>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {'Don\'t have an account? Sign Up'}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}
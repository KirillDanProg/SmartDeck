import * as React from 'react';
import Avatar from '@mui/material/Avatar';
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
import {useRegisterMutation} from "./counterAPI";
import * as yup from 'yup';
import {useFormik} from "formik";
import {BasicModal} from "../../common/components/ModalWindow";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../layout/AppRoutes/routes";
import {PasswordVisibleIcon} from "../../common/components/PasswordVisible";
import {InputAdornment} from "@mui/material";


const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(7, 'Password should be of minimum 7 characters length')
        .required('Password is required'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});

export const SignUpPage = () => {
    const [register, {error, isSuccess, isLoading}] = useRegisterMutation()

    const [isShown, setIsShown] = useState(false)

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await register(values)
        },
    });

    const passwordType = isShown ? "text" : "password"

    useEffect(() => {
        if (isSuccess) {
            navigate(`/${PATH.LOGIN}`)
        }
    }, [isLoading])

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
                            type={passwordType}
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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
                            helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                            label="Confirm password"
                            type={passwordType}
                            id="passwordConfirm"
                            {...formik.getFieldProps('passwordConfirm')}
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
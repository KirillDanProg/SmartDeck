import React, {FC, useState} from 'react';
import {InputAdornment} from "@mui/material";
import {PasswordVisibleIcon} from "../PasswordVisible";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useFormik} from "formik";
import {validationSchema} from "./yupValidation";
import Button from "@mui/material/Button";


type FormPropsType = {
    //todo: fix types
    callback: (data: any) => void
    formType?: string
}
export const Form: FC<FormPropsType> = ({callback, formType}) => {

    const [isShown, setIsShown] = useState(false)

    const passwordType = isShown ? "text" : "password"

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        validationSchema,
        onSubmit: async (data) => {
            await callback(data)
        },
    });
    return (
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
            {
                formType === "sign-up" &&
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
                />
            }
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
    )
};

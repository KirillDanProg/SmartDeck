import React, {useState} from 'react';
import styles from "../forgotPassword/ForgotPassword.module.css";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {InputAdornment} from "@mui/material";
import {useFormik} from "formik";
import {PasswordVisibleIcon} from "../../../common/components/PasswordVisible";
import {useParams} from "react-router-dom";
import {useSetNewPasswordMutation} from "../../auth/authApi";
import {useRedirectTo} from "../../../common/hooks/useRedirectTo";
import {PATH} from "../../../layout/AppRoutes/routes";
import * as yup from "yup";

type InitialValuesType = {
    password: string
}
const validationSchema = yup.object().shape({
    password: yup
        .string()
        .min(7, 'Password should be of minimum 7 characters length')
        .required('Password is required'),
});


export const CreatePassword = () => {
    const [isShown, setIsShown] = useState(false)

    const {resetPasswordToken} = useParams()

    const [setNewPassword, {isSuccess}] = useSetNewPasswordMutation()

    const passwordType = isShown ? "text" : "password"

    const onSubmitHandler = async ({password}: InitialValuesType) => {
        if (resetPasswordToken) {
            const setNewPasswordData = {
                password,
                resetPasswordToken
            }
            await setNewPassword(setNewPasswordData)
            formik.resetForm()
        }
    }

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema,
        onSubmit: onSubmitHandler,
    })

    useRedirectTo(PATH.LOGIN, isSuccess, [isSuccess])

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                height: '100vh',
                justifyContent: 'center',
            }}
        >
            <Paper sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 7,
                p: 3,
                width: 400,
                height: 350,
            }}
            >
                <Stack sx={{alignItems: 'center'}}
                       className={styles.container}
                >
                    <Typography variant={"inherit"} className={styles.title}>Create new password</Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        label="Password"
                        type={passwordType}
                        id="password"
                        variant="standard"
                        {...formik.getFieldProps('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <PasswordVisibleIcon isShown={isShown} setShown={setIsShown}/>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Typography variant={"inherit"}
                                className={styles.textAfterEmail}>
                        Create new password and we will send you
                        <br/>
                        further instructions to email
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <Button
                            type="submit"
                            variant={"contained"}
                            color={"primary"}
                        >
                            Create new password
                        </Button>
                    </form>
                </Stack>
            </Paper>
        </Container>
    );
};


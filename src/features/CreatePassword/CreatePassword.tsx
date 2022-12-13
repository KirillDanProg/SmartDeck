import React, {useState} from 'react';
import s from "../forgotPassword/ForgotPassword.module.css";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import {useFormik} from "formik";
import {validationSchema} from "../../common/components/form/yupValidation";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {InputAdornment} from "@mui/material";
import {PasswordVisibleIcon} from "../../common/components/PasswordVisible";

export const CreatePassword = () => {
    const [isShown, setIsShown] = useState(false)

    const passwordType = isShown ? "text" : "password"
    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema,
        onSubmit: (email) => {
            formik.resetForm()
        },
    })
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
                       className={s.container}
                >
                <Typography variant={"inherit"} className={s.title}>Create new password</Typography>
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
                            className={s.textAfterEmail}>
                    Create new password and we will send you
                    <br />
                    further instructions to email
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Button
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


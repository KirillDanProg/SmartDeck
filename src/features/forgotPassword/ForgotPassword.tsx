import React from 'react';
import Paper from "@mui/material/Paper";
import s from "./ForgotPassword.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useFormik} from "formik";
import {validationSchema} from "../../common/components/form/yupValidation";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {NavLink} from "react-router-dom";

export const ForgotPassword = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
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
                    <Typography variant={"inherit"}
                                className={s.title}
                    >Forgot your password?</Typography>
                    <TextField
                        sx={{m: 1, width: '40ch'}}
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        {...formik.getFieldProps('email')}
                    />
                    <Typography variant={"inherit"} className={s.textAfterEmail}>
                        Enter your email address and we will send you further instructions
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <Button
                            variant={"contained"}
                            color={"primary"}
                        >
                            Send Instruction
                        </Button>
                    </form>
                    <Typography variant={"inherit"}
                                className={s.pSmall}
                    >Did you remember your password?</Typography>
                    <NavLink to={'/login'}
                             className={s.pToLogin} onClick={() => {
                    }}>
                        Try logging in
                    </NavLink>
                </Stack>
            </Paper>
        </Container>
    );
};


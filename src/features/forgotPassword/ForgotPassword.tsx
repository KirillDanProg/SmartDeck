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
import { useForgotPasswordMutation} from "../auth/appAPI";

type FormikErrorType = {
    email: string
}

export const ForgotPassword = () => {
    const [returnPassword, {}] = useForgotPasswordMutation()
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: (values) => {
            const errors: Partial<FormikErrorType> = {}
            if (!values.email) {
                errors.email = 'Email Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        },
        onSubmit: async (data) => {
            await returnPassword(data.email)
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
                    <form onSubmit={formik.handleSubmit}>

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
                        <Button
                            type={"submit"}
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


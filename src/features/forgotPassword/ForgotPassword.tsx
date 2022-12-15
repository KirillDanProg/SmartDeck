import React from 'react';
import Paper from "@mui/material/Paper";
import s from "./ForgotPassword.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useFormik} from "formik";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {NavLink, useNavigate} from "react-router-dom";
import {useForgotPasswordMutation} from "../auth/authApi";
import {useRedirectTo} from "../../app/hooks/useRedirectTo";
import {PATH} from "../../layout/AppRoutes/routes";
import {saveToLocalStorage} from "../../app/utils/local-storage";
import {CustomGridContainer} from "../../app/utils/CustomGridContainer";

type FormikErrorType = {
    email: string
}

export const ForgotPassword = () => {
    const [resetPassword, {isSuccess, data, isError}] = useForgotPasswordMutation()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        //todo: fix validation
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
            saveToLocalStorage("email", data.email)
            await resetPassword(data.email)
            navigate(PATH.CHECK_EMAIL)
            formik.resetForm()
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <CustomGridContainer>
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
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                </Typography>
                <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                >
                    Send Instruction
                </Button>

                <Typography variant={"inherit"}
                            className={s.pSmall}
                >Did you remember your password?</Typography>
                <NavLink to={'/login'}
                         className={s.pToLogin} onClick={() => {
                }}>
                    Try logging in
                </NavLink>
            </CustomGridContainer>
        </form>
    );
};


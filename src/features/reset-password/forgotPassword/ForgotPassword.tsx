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
import {useForgotPasswordMutation} from "../../auth/authApi";
import {PATH} from "../../../layout/AppRoutes/routes";
import {saveToLocalStorage} from "../../../app/utils/local-storage";
import * as yup from "yup";
import Box from "@mui/material/Box";

export const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
},);

export const ForgotPassword = () => {
    const [resetPassword] = useForgotPasswordMutation()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema,
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
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
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


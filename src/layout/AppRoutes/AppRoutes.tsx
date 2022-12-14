import React from 'react'

import {Navigate, Route, Routes} from 'react-router-dom'
import {PATH} from "./routes";
import {Page404} from "../404-page/Page404";
import {SignInPage} from "../../features/auth/sign-in/SignInPage";
import {Main} from "../Main/Main";
import {Profile} from "../../features/profile/Profile";
import {CheckEmailPage} from '../../features/auth/ckeck-email/CheckEmailPage';
import {SignUpPage} from "../../features/auth/sign-up/SignUpPage";
import {CreatePassword} from "../../features/createPassword/CreatePassword";
import {ForgotPassword} from "../../features/forgotPassword/ForgotPassword";


export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.MAIN} element={<Main/>}>
                    <Route path={PATH.PROFILE} element={<Profile/>}/>
                    <Route path={PATH.LOGIN} element={<SignInPage/>}/>
                    <Route path={PATH.SIGN_UP} element={<SignUpPage/>}/>
                    <Route path="404" element={<Page404/>}/>
                    <Route path="*" element={<Navigate to="404"/>}/>
                </Route>

                <Route path={PATH.CHECK_EMAIL} element={<CheckEmailPage/>}/>
                <Route path={`${PATH.SET_PASSWORD}/:resetPasswordToken`} element={<CreatePassword/>}/>
                <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword/>}/>

            </Routes>
        </>
    )
}

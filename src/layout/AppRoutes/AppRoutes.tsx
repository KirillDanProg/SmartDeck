import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'
import {PATH} from "./routes";
import {Page404} from "../404-page/Page404";
import {Profile} from "../Profile/Profile";
import {SignUpPage} from "../../features/auth/SignUpPage";
import {SignInPage} from "../../features/auth/sign-in/SignInPage";
import {Main} from "../Main/Main";


export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.MAIN}  element={<Main />}>
                    <Route path={PATH.PROFILE} element={<Profile />} />
                    <Route path={PATH.LOGIN} element={<SignInPage />} />
                    <Route path={PATH.SIGN_UP} element={<SignUpPage />} />
                    <Route path="404" element={<Page404 />} />
                    <Route path="*" element={<Navigate to="404" />} />
                </Route>
            </Routes>
        </>
    )
}
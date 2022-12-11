import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'
import {PATH} from "./routes";
import {Page404} from "../404-page/Page404";
import {Profile} from "../Profile/Profile";
import {SignUpPage} from "../../features/auth/SignUpPage";


export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.MAIN}  element={<SignUpPage />}>
                    <Route path={PATH.PROFILE} element={<Profile />} />
                    {/*<Route path={PATH.LOGIN} element={<LoginPage />} />*/}
                    {/*<Route path={PATH.SIGN_UP} element={<SignUp />} />*/}
                    <Route path="404" element={<Page404 />} />
                    <Route path="*" element={<Navigate to="404" />} />
                </Route>
            </Routes>
        </>
    )
}
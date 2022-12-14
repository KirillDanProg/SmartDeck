import React from 'react'

import {Navigate, Route, Routes, useParams} from 'react-router-dom'
import {PATH} from "./routes";
import {Page404} from "../404-page/Page404";
import {SignUpPage} from "../../features/auth/SignUpPage";
import {SignInPage} from "../../features/auth/sign-in/SignInPage";
import {Main} from "../Main/Main";
import {Profile} from "../../features/profile/Profile";


export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.MAIN}  element={<Main />}>
                    <Route path={PATH.PROFILE} element={<Profile/>} />
                    <Route path={PATH.LOGIN} element={<SignInPage />} />
                    <Route path={PATH.SIGN_UP} element={<SignUpPage />} />
                    <Route path="404" element={<Page404 />} />
                    <Route path="*" element={<Navigate to="404" />} />
                </Route>
                <Route path="/set-new-password/:token" element={<Reset />}/>
            </Routes>
        </>
    )
}

const Reset = () => {
    const {token} = useParams()


    return (
        <div>
            reset Password
        </div>
    )
}
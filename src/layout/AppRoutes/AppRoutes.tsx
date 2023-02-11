import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PATH } from "./routes";
import { Page404 } from "../404-page/Page404";
import { SignInPage } from "features/auth/sign-in/SignInPage";
import { Main } from "../Main/Main";
import { SignUpPage } from "features/auth/sign-up/SignUpPage";
import { DevPage } from "../devPage/DevPage";
import { LearnPack } from "common/components/learn-page/LearnPack";
import {
    CheckEmailPage,
    ForgotPassword
} from "common/components/reset-password";

const Profile = lazy(() => import("../../features/profile"))
const CardsPage = lazy(() => import("../../features/packs-cards/cards"))
const PacksPage = lazy(() => import("../../features/packs-cards/packs"))
const CreatePassword = lazy(() => import("../../common/components/reset-password/createPassword"))

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.MAIN} element={<Main />}>
                    <Route path={PATH.PROFILE} element={<Profile />} />
                    <Route path={PATH.PACK_LISTS} element={<PacksPage />} />
                    <Route path={PATH.CARDS} element={<CardsPage />} />
                    <Route path={`${PATH.LEARN_PACK}`} element={<LearnPack />} />
                </Route>

                <Route path={PATH.SIGN_UP} element={<SignUpPage />} />
                <Route path={PATH.LOGIN} element={<SignInPage />} />
                <Route path={PATH.CHECK_EMAIL} element={<CheckEmailPage />} />
                <Route path={`${PATH.SET_PASSWORD}/:resetPasswordToken`} element={<CreatePassword />} />
                <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword />} />
                <Route path={PATH.DEV_PAGE} element={<DevPage />} />
                <Route path="404" element={<Page404 />} />
                <Route path="*" element={<Navigate to="404" />} />
            </Routes>
        </>
    );
};

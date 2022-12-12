import React from 'react';
import {Outlet} from "react-router-dom";
import {PATH} from "../AppRoutes/routes";
import {useRedirectTo} from "../../app/hooks/useRedirectTo";
import {useAppSelector} from "../../app/hooks";
import {selectCurrentUser} from "../../features/auth/authSlice";

export const Main = () => {
    const userId = useAppSelector(selectCurrentUser)

    // useRedirectTo(PATH.SIGN_UP, !userId, [])

    return (
        <div>
            <Outlet/>
        </div>
    );
};


import React from 'react';
import {Outlet} from "react-router-dom";
import {PATH} from "../AppRoutes/routes";
import {useRedirectTo} from "../../common/hooks/useRedirectTo";
import {useAppSelector} from "../../common/hooks";
import {selectCurrentUser} from "../../features/auth/authSlice";
import Grid from "@mui/material/Grid";

export const Main = () => {

    const userId = useAppSelector(selectCurrentUser)

    useRedirectTo(PATH.LOGIN, !userId, [])

    return (
        <Grid container component="main" sx={{height: '100vh'}}>
            <Outlet/>
        </Grid>
    );
};


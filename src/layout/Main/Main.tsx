import { PATH } from "../AppRoutes/routes";
import { useRedirectTo } from "../../common/hooks/useRedirectTo";
import { useAppSelector } from "../../common/hooks";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import React from "react";
import Grid from "@mui/material/Grid";

export const Main = () => {

  const userId = useAppSelector(selectCurrentUser);

  const { pathname } = useLocation();

  useRedirectTo(PATH.LOGIN, !userId, [userId]);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>

      {
        pathname === "/"
          ? <Navigate to={PATH.PACK_LISTS} />
          : <Outlet />
      }

    </Grid>
  );
};


import { PATH } from "../AppRoutes/routes";
import { useAppSelector } from "../../common/hooks";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import Grid from "@mui/material/Grid";

export const Main = () => {

  const isAuth = useAppSelector(selectCurrentUser);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {
        isAuth
          ? <Outlet />
          : <Navigate to={PATH.LOGIN} />
      }
    </Grid>
  );
};


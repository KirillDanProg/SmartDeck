import { PATH } from "../AppRoutes/routes";
import { useAppSelector } from "../../common/hooks";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import Box from "@mui/material/Box";

export const Main = () => {

  const isAuth = useAppSelector(selectCurrentUser);

  return (
    <Box component="main">
      {
        isAuth
          ? <Outlet />
          : <Navigate to={PATH.LOGIN} />
      }
    </Box>
  );
};


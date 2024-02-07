import {PATH} from "../AppRoutes/routes";
import {useAppSelector} from "../../common/hooks";
import {selectCurrentUser} from "../../features/auth/authSlice";
import {Navigate, Outlet} from "react-router-dom";
import React, {Suspense} from "react";
import Box from "@mui/material/Box";
import {Preloader} from "../../common/components";

export const Main = () => {
  const isAuth = useAppSelector(selectCurrentUser);

  return (
    <Box component="main">
      {isAuth ? (
        <Suspense fallback={<Preloader />}>
          <Outlet />
        </Suspense>
      ) : (
        <Navigate to={PATH.LOGIN} />
      )}
    </Box>
  );
};

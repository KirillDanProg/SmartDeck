import {PATH} from "../AppRoutes/routes";
import {useAppSelector} from "../../common/hooks";
import {selectCurrentUser} from "../../features/auth/authSlice";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {Suspense, useEffect} from "react";
import Box from "@mui/material/Box";
import {Preloader} from "../../common/components";

export const Main = () => {
  const isAuth = useAppSelector(selectCurrentUser);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(PATH.SIGN_IN, {state: {from: location}});
      return;
    }
  }, [isAuth]);

  return (
    <Box component="main">
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

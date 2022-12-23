import React, { useEffect } from "react";
import { serverErrorHandler } from "common/utils";
import { useAppSelector } from "common/hooks";
import { selectCurrentError } from "features/auth/authSlice";
import { useAuthMeMutation } from "features/auth/authApi";
import CssBaseline from "@mui/material/CssBaseline";
import { ErrorSnackbar, Preloader } from "common/components";
import { AppRoutes, Header, ColorModelContextProvider } from "layout";
import "./App.css";

function App() {

  const error = useAppSelector(selectCurrentError);

  const [authMe, { isLoading }] = useAuthMeMutation();

  useEffect(() => {
    authMe("").unwrap();
  }, []);

  return (
    <ColorModelContextProvider>
      <CssBaseline />
      {
        error && <ErrorSnackbar errorMessage={serverErrorHandler(error)} />
      }
      {isLoading
        ? <Preloader />
        : <>
          <Header />
          <AppRoutes />
        </>}
    </ColorModelContextProvider>
  );
}

export default App;

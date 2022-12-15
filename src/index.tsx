import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import {Profile} from "./features/profile/Profile";
import {GeneralPackList} from "./features/PackList/GeneralPackList";
import {CreatePassword} from "./features/createPassword/CreatePassword";
import {ForgotPassword} from "./features/forgotPassword/ForgotPassword";
import {SignInPage} from "./features/auth/sign-in/SignInPage";
import {SignUpPage} from "./features/auth/sign-up/SignUpPage";
import {CheckEmailPage} from "./features/auth/ckeck-email/CheckEmailPage";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <BrowserRouter>
      <Provider store={store}>
        {/*<App />*/}
          <GeneralPackList/>
        {/*  <SignUpPage/>*/}
        {/*  <SignInPage/>*/}
        {/*  <ForgotPassword/>*/}
        {/*  <CreatePassword/>*/}
        {/*  <CheckEmailPage/>*/}
        {/*  <Profile/>*/}
      </Provider>
    </BrowserRouter>
);

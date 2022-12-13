import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import {ForgotPassword} from "./features/forgotPassword/ForgotPassword";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <BrowserRouter>
      <Provider store={store}>
        <ForgotPassword />
        {/*<App />*/}
      </Provider>
    </BrowserRouter>
);

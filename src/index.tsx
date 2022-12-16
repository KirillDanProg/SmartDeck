import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import {NamePack} from "./features/PackList/NamePack/NamePack";


const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <BrowserRouter>
      <Provider store={store}>
        {/*<App />*/}
          <NamePack/>
      </Provider>
    </BrowserRouter>
);

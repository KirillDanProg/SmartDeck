import { store } from './app/store';
import App from './app/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {BasicModalPacksList} from "./features/modal/BasicModal";
import {BtnForModal} from "./features/modal/BtnForModal";
import {ChildEditPack} from "./features/modal/ChildEditPack";
import {LoginSkeleton} from "./common/components/Skeletons/LoginSkeleton";
import {Page404} from "./layout/404-page/Page404";
import {SignupSkeleton} from "./common/components/Skeletons/SignUpSkeleton";


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/*<SignupSkeleton />*/}
      <App />
    </Provider>
  </BrowserRouter>
);

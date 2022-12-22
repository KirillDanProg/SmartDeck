import {store} from './app/store';
import App from './app/App';
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {ModalForMyPack} from "./features/modal/ModalForMyPack";


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/*<ModalForMyPack />*/}
      <App />
    </Provider>
  </BrowserRouter>
);

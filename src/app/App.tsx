import React from "react";
import "./App.css";
import {AppRoutes} from "../layout/AppRoutes/AppRoutes";
import {Header} from "../layout/Header/Header";

function App() {
  return <div className="App">

    <Header/>

    <AppRoutes/>

  </div>;
}

export default App;

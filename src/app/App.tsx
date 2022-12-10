import React from "react";
import "./App.css";
import {AppRoutes} from "../layout/AppRoutes/AppRoutes";
import {Header} from "../layout/Header/Header";

function App() {
  return <div className="App">

    <Header/>

    <AppRoutes/>

    <h1>Kirill</h1>

  </div>;
}

export default App;

import React from "react";
import "./App.css";
import {AppRoutes} from "../layout/AppRoutes/AppRoutes";
import {Header} from "../layout/Header/Header";

function App() {
  return <div className="App">

    <Header/>

    <AppRoutes/>
    <h2>Login</h2>

    <h1>Dima</h1>
    <h1>Alex</h1>

  </div>;
}

export default App;

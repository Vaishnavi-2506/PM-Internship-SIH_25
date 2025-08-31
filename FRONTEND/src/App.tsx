import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderBar from "./common/header";
import MainRouter from "./router";
import Login from "./login/already/login";

function App() {
  return (
    <div>
      {/* <HeaderBar /> */}
      <MainRouter />
    </div>
  );
}

export default App;

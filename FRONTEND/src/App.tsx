import React from "react";
import "./App.css";
// import HeaderBar from "./common/header";
import MainRouter from "./router";
import Login from "./login/already/login";
import Footer from "./common/footer";

function App() {
  return (
    <div>
      {/* <HeaderBar /> */}
      <MainRouter />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

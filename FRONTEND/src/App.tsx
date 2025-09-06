import React from "react";
import "./App.css";
import MainRouter from "./router";
import HeaderBar from "./common/header";
import Footer from "./common/footer";
import Jobcard from "./common/jobcard/jobcard";
import SearchPage from "./screen/search/search";

function App() {
  return (
    <div>
      <HeaderBar />
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;

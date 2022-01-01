import React from "react";
import { FooterWithGetInTouch } from "../home/Footer/Footer";
import Navbar from "../navbar/Navbar";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Main2 from "./Main/Main2";

function AboutMain() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Main2 />
      <FooterWithGetInTouch />
    </div>
  );
}

export default AboutMain;

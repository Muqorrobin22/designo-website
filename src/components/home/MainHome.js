import React from "react";
import Navbar from "../navbar/Navbar";
import FeaturesHome from "./Features/FeaturesHome";
import { FooterWithGetInTouch } from "./Footer/Footer";
import HeaderHome from "./header/HeaderHome";
import ServicesHome from "./services/ServicesHome";

function MainHome() {
  return (
    <div>
      <Navbar />
      <HeaderHome />
      <ServicesHome />
      <FeaturesHome />
      <FooterWithGetInTouch />
    </div>
  );
}

export default MainHome;

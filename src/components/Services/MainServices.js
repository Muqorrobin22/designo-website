import React from "react";
import { FooterWithGetInTouch } from "../home/Footer/Footer";
import Navbar from "../navbar/Navbar";
import {
  HeaderAppDesign,
  HeaderGraphicDesign,
  HeaderWebDesign,
} from "./Header/Header";
import {
  MainServicesApp,
  MainServicesGraph,
  MainServicesWeb,
} from "./Main/MainServices";

export function WebDesign() {
  return (
    <div>
      <Navbar />
      <HeaderWebDesign />
      <MainServicesWeb />
      <FooterWithGetInTouch />
    </div>
  );
}
export function AppDesign() {
  return (
    <div>
      <Navbar />
      <HeaderAppDesign />
      <MainServicesApp />
      <FooterWithGetInTouch />
    </div>
  );
}
export function GraphicDesign() {
  return (
    <div>
      <Navbar />
      <HeaderGraphicDesign />
      <MainServicesGraph />
      <FooterWithGetInTouch />
    </div>
  );
}

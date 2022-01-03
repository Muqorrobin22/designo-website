import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainHome from "./components/home/MainHome";
import {
  AppDesign,
  GraphicDesign,
  WebDesign,
} from "./components/Services/MainServices";
import AboutMain from "./components/about/AboutMain";
import LocationMain from "./components/locations/LocationMain";
import ContactMain from "./components/Contact/ContactMain";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./index.css";

const RoutePath = () => {
  const Location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        classNames="page"
        timeout={300}
        key={Location.key}
        unmountOnExit
      >
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/about" element={<AboutMain />} />
          <Route path="/location" element={<LocationMain />} />
          <Route path="/contact" element={<ContactMain />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/app-design" element={<AppDesign />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <RoutePath />
  </BrowserRouter>,
  // </React.StrictMode>,

  document.getElementById("root")
);

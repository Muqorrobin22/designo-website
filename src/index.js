import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHome from "./components/home/MainHome";
import {
  AppDesign,
  GraphicDesign,
  WebDesign,
} from "./components/Services/MainServices";
import AboutMain from "./components/about/AboutMain";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/app-design" element={<AppDesign />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);

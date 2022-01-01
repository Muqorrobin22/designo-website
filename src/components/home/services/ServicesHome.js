import React from "react";
import WebDesign from "../../../assets/home/mobile/image-web-design.jpg";
import AppDesign from "../../../assets/home/mobile/image-app-design.jpg";
import GraphicDesign from "../../../assets/home/mobile/image-graphic-design.jpg";
import styled from "styled-components";
import Service from "../../utils/services/Service";

const ServiceData = [
  {
    title: "Web Design",
    img: WebDesign,
  },
  {
    title: "App Design",
    img: AppDesign,
  },
  {
    title: "Graphic Design",
    img: GraphicDesign,
  },
];

function ServicesHome() {
  return (
    <ServiceWrap>
      {ServiceData.map((data) => (
        <Service margin key={data.title} title={data.title} images={data.img} />
      ))}
    </ServiceWrap>
  );
}

const ServiceWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 12rem 0;
`;

export default ServicesHome;

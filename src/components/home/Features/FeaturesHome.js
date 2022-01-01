import React from "react";
import { ReactComponent as Passionate } from "../../../assets/home/desktop/illustration-passionate.svg";
import { ReactComponent as Resource } from "../../../assets/home/desktop/illustration-resourceful.svg";
import { ReactComponent as Friendly } from "../../../assets/home/desktop/illustration-friendly.svg";
import styled from "styled-components";
import Features from "../../utils/features/Features";

const featureData = [
  {
    title: "PASSIONATE",
    text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    svg: <Passionate />,
  },
  {
    title: "RESOURCEFUL",
    text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    svg: <Resource />,
  },
  {
    title: "FRIENDLY",
    text: " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    svg: <Friendly />,
  },
];

function FeaturesHome() {
  return (
    <FeaturesWrap>
      {featureData.map((data) => (
        <Features
          key={data.title}
          Svg={data.svg}
          title={data.title}
          text={data.text}
        />
      ))}
    </FeaturesWrap>
  );
}

const FeaturesWrap = styled.div`
  margin-top: 8rem;
`;

export default FeaturesHome;

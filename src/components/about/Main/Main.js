import React from "react";
import styled from "styled-components";
import About from "../../utils/About/About";
import { getAboutData } from "../../utils/About/AboutData";

const aboutData = getAboutData();

function Main() {
  return (
    <MainWrap>
      {aboutData.map((data) => (
        <About key={data.title} title={data.title} Svg={data.svg} />
      ))}
    </MainWrap>
  );
}

const MainWrap = styled.div`
  margin-top: 12rem;
  margin-bottom: 12rem;

  @media (min-width: 1440px) {
    display: flex;
    margin: 12rem 16.5rem;
    justify-content: space-between;
  }
`;

export default Main;

import React from "react";
import styled from "styled-components";
import Bounce from "react-reveal/Bounce";

function Features({ Svg, title, text }) {
  return (
    <Bounce>
      <FeatureWrap>
        {Svg}
        <div role="banner">
          <h1>{title}</h1>
          <p> {text} </p>
        </div>
      </FeatureWrap>
    </Bounce>
  );
}

export function FeaturesTablet({ Svg, title, text }) {
  return (
    <Bounce>
      <FeatureWrapTablet>
        {Svg}
        <div role="banner">
          <h1>{title}</h1>
          <p> {text} </p>
        </div>
      </FeatureWrapTablet>
    </Bounce>
  );
}

const FeatureWrap = styled.div`
  width: 90%;
  display: flex;
  margin: 8rem auto;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: Jost;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    /* identical to box height, or 130% */

    text-align: center;
    letter-spacing: 5px;
  }
  p {
    font-family: Jost;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */

    text-align: center;
  }

  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1440px) {
    width: 35rem;
  }
`;

const FeatureWrapTablet = styled(FeatureWrap)`
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  div {
    display: flex;
    text-align: left;
    justify-content: flex-start;
    width: 70%;
    flex-direction: column;
    align-items: flex-start;

    p {
      text-align: left;
    }
  }
`;

export default Features;

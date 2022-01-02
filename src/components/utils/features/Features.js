import React from "react";
import styled from "styled-components";

function Features({ Svg, title, text }) {
  return (
    <div>
      <FeatureWrap>
        {Svg}
        <div>
          <h1>{title}</h1>
          <p> {text} </p>
        </div>
      </FeatureWrap>
    </div>
  );
}

export function FeaturesTablet({ Svg, title, text }) {
  return (
    <FeatureWrapTablet>
      {Svg}
      <div>
        <h1>{title}</h1>
        <p> {text} </p>
      </div>
    </FeatureWrapTablet>
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

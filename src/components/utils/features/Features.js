import React from "react";
import styled from "styled-components";

function Features({ Svg, title, text }) {
  return (
    <FeatureWrap>
      {Svg}
      <h1>{title}</h1>
      <p> {text} </p>
    </FeatureWrap>
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
`;

export default Features;

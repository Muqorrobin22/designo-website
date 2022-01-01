import React from "react";
import styled from "styled-components";
import { Button1 } from "../Buttons/Button";

function About({ Svg, title }) {
  return (
    <AboutWrap>
      {Svg}
      <div>
        <h1>{title}</h1>
        <Button1 to="/location">See Location</Button1>
      </div>
    </AboutWrap>
  );
}

const AboutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 4.8rem;
  div {
    h1 {
      font-family: Jost;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 26px;
      /* identical to box height, or 130% */

      text-align: center;
      letter-spacing: 5px;
      margin: 4.8rem 0 3.2rem 0;
      color: #333136;
    }
  }
`;

export default About;

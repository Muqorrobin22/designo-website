import React from "react";
import styled from "styled-components";
import { Button1 } from "../Buttons/Button";
import Tada from "react-reveal/Tada";

function About({ Svg, title }) {
  return (
    <Tada>
      <AboutWrap>
        {Svg}
        <div>
          <h1>{title}</h1>
          <Button1 to="/location">See Location</Button1>
        </div>
      </AboutWrap>
    </Tada>
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

  @media (min-width: 1440px) {
    width: 35rem;
  }
`;

export default About;

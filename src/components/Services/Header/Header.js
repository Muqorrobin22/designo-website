import React from "react";
import styled from "styled-components";
import { servicesData } from "../../utils/services/ServiceData";

const ServiceData = servicesData();

export function HeaderWebDesign() {
  return (
    <HeaderWrap>
      <div>
        <h1>{ServiceData[0].title}</h1>
        <p>{ServiceData[0].text}</p>
      </div>
    </HeaderWrap>
  );
}
export function HeaderAppDesign() {
  return (
    <HeaderWrap>
      <div>
        <h1>{ServiceData[1].title}</h1>
        <p>{ServiceData[1].text}</p>
      </div>
    </HeaderWrap>
  );
}
export function HeaderGraphicDesign() {
  return (
    <HeaderWrap>
      <div>
        <h1>{ServiceData[2].title}</h1>
        <p>{ServiceData[2].text}</p>
      </div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  height: 32rem;
  background-color: var(--color-primary-peach);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    h1 {
      font-family: Jost;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 36px;
      /* identical to box height, or 112% */

      text-align: center;

      color: #ffffff;
      width: 32.7rem;
    }
    p {
      font-family: Jost;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 25px;
      /* or 167% */

      text-align: center;

      color: #ffffff;
      width: 32.7rem;
    }
  }
`;

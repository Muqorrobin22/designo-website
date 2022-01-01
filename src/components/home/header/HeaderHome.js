import React from "react";
import styled from "styled-components";
import { Button1 } from "../../utils/Buttons/Button";
import Image from "./../../../assets/home/desktop/image-hero-phone.png";
function HeaderHome() {
  return (
    <HeaderWrap>
      <div className="info">
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button1 dark to="/about">
          Learn more
        </Button1>
        <img src={Image} alt={Image} />
      </div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  height: 84.3rem;
  background-color: var(--color-primary-peach);
  position: relative;
  overflow: hidden;

  .info {
    position: absolute;
    top: 8rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-family: Jost;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 36px;
      width: 32.7rem;
      text-align: center;

      color: #ffffff;
    }
    p {
      font-family: Jost;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 25px;
      width: 32.7rem;

      text-align: center;
      margin: 1.4rem 0 2.4rem 0;
      color: #ffffff;
    }
    img {
      margin-top: -12rem;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: minmax(49.5rem, 61rem) minmax(27.3rem, 83rem);
    .img {
      order: 2;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .info {
      margin-top: 0;
      order: 1;
      height: auto;
      padding: 17.3rem 5.4rem;
      h1 {
        font-size: 4rem;
        width: 38.7rem;
      }
      p {
        font-size: 1.5rem;
        width: 38.7rem;
      }
      div {
        width: 38.7rem;
        margin-left: 0;
      }
    }
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: minmax(61rem, 1fr) minmax(83rem, 1fr);

    .img {
      img {
        height: 100%;
      }
    }
  }
`;

export default HeaderHome;

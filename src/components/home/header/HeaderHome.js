import React from "react";
import styled from "styled-components";
import { Button1 } from "../../utils/Buttons/Button";
import Image from "./../../../assets/home/desktop/image-hero-phone.png";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";

function HeaderHome() {
  return (
    <HeaderWrap>
      <div className="info">
        <div className="text">
          <Zoom left cascade>
            <h1>Award-winning custom designs and digital branding solutions</h1>
          </Zoom>
          <Zoom right cascade>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
          </Zoom>
          <Bounce right>
            <Button1 dark to="/about">
              Learn more
            </Button1>
          </Bounce>
        </div>

        <Flip right className="img">
          <img src={Image} alt={Image} />
        </Flip>
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
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
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
    margin: 4rem;
    border-radius: 15px;
    height: 90rem;
    .info {
      margin-top: 0;
      order: 1;
      height: auto;
      h1 {
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 48px;
        /* or 100% */

        text-align: center;

        color: #ffffff;
        width: 80%;
      }
      p {
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        /* or 162% */

        text-align: center;

        color: #ffffff;
        width: 80%;
      }
    }
  }
  @media (min-width: 1440px) {
    margin: 0 16.5rem;
    height: 64rem;
    .info {
      position: relative;
      top: 0;
      left: 0;
      transform: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .text {
        align-items: flex-start;
        padding-left: 9.5rem;
        transform: translateY(-10rem);
        h1,
        p {
          text-align: left;
          width: 54rem;
        }
      }
      .img {
        margin-right: -5.5rem;
        transform: translateY(8rem);
      }
    }
  }
`;

export default HeaderHome;

import React from "react";
import styled from "styled-components";
import ImageMobile3 from "../../../assets/about/mobile/image-real-deal.jpg";
import ImageTablet3 from "../../../assets/about/tablet/image-real-deal.jpg";
import ImageDesktop3 from "../../../assets/about/desktop/image-real-deal.jpg";
import { useMediaQuery } from "react-responsive";
import Zoom from "react-reveal/Zoom";

function Main2() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  let imageRender1;

  if (isDesktop) {
    imageRender1 = <img src={ImageDesktop3} alt={ImageMobile3} />;
  } else if (isTablet) {
    imageRender1 = <img src={ImageTablet3} alt={ImageMobile3} />;
  } else {
    imageRender1 = <img src={ImageMobile3} alt={ImageMobile3} />;
  }
  return (
    <Zoom>
      <Wrap>
        <div className="img">{imageRender1}</div>
        <div className="info2">
          <h1>The real deal</h1>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success. <br /> <br /> We
            are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </Wrap>
    </Zoom>
  );
}

const Wrap = styled.div`
  margin: 12rem 0;
  .img {
    img {
      width: 100%;
      background-size: cover;
    }
  }
  .info2 {
    height: 48rem;
    background-color: #fdf3f0;
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
      /* identical to box height, or 112% */

      text-align: center;

      color: var(--color-primary-peach);
    }

    p {
      font-family: Jost;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 25px;
      /* or 167% */

      text-align: center;
      width: 32.7rem;
      color: black;
    }
  }

  @media (min-width: 768px) {
    margin: 4rem 4rem 12rem 4rem;
    border-radius: 15px;
    overflow: hidden;
    .info2 {
      h1 {
        font-size: 4.8rem;
      }
      p {
        font-size: 1.6rem;
        width: 90%;
      }
    }
  }
  @media (min-width: 1440px) {
    margin: 0 16.5rem;

    display: flex;
    flex-direction: row-reverse;
    .img {
      width: 40%;
      img {
        height: 100%;
      }
    }
    .info2 {
      width: 60%;
      height: auto;
      align-items: flex-start;
      padding-left: 9.4rem;
      overflow: hidden;
      p,
      h1 {
        text-align: left;
        width: 45.8rem;
      }
    }
  }
`;

export default Main2;

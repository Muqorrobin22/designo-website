import React from "react";
import styled from "styled-components";
import ImageMobile1 from "../../../assets/about/mobile/image-about-hero.jpg";
import ImageMobile2 from "../../../assets/about/mobile/image-world-class-talent.jpg";
import ImageTablet1 from "../../../assets/about/tablet/image-about-hero.jpg";
import ImageTablet2 from "../../../assets/about/tablet/image-world-class-talent.jpg";
import ImageDesktop1 from "../../../assets/about/desktop/image-about-hero.jpg";
import ImageDesktop2 from "../../../assets/about/desktop/image-world-class-talent.jpg";

import { useMediaQuery } from "react-responsive";

function Header() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  let imageRender1;
  let imageRender2;

  if (isDesktop) {
    imageRender1 = <img src={ImageDesktop1} alt={ImageMobile1} />;
    imageRender2 = <img src={ImageDesktop2} alt={ImageMobile1} />;
  } else if (isTablet) {
    imageRender1 = <img src={ImageTablet1} alt={ImageMobile1} />;
    imageRender2 = <img src={ImageTablet2} alt={ImageMobile1} />;
  } else {
    imageRender1 = <img src={ImageMobile1} alt={ImageMobile1} />;
    imageRender2 = <img src={ImageMobile2} alt={ImageMobile1} />;
  }

  return (
    <HeaderWrap>
      <div className="div1">
        <div className="img">{imageRender1}</div>
        <div className="info">
          <h1>About Us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </div>
      <div className="div2">
        <div className="img">{imageRender2}</div>
        <div className="info2">
          <h1>World-class talent</h1>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms. <br /> <br /> Our team is
            multi-disciplinary and we are not merely interested in form —
            content and meaning are just as important. We give great importance
            to craftsmanship, service, and prompt delivery. Clients have always
            been impressed with our high-quality outcomes that encapsulates
            their brand’s story and mission.
          </p>
        </div>
      </div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  .img {
    img {
      width: 100%;
      background-size: cover;
    }
  }
  .info,
  .info2 {
    height: 48rem;
    background-color: var(--color-primary-peach);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -0.5rem;
    h1 {
      font-family: Jost;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 36px;
      /* identical to box height, or 112% */

      text-align: center;

      color: #ffffff;
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
      color: #ffffff;
    }
  }
  .info2 {
    background-color: #fdf3f0;
    h1 {
      color: var(--color-primary-peach);
    }
    p {
      color: black;
    }
  }

  @media (min-width: 768px) {
    .div1,
    .div2 {
      margin: 4rem 4rem 12rem 4rem;
      border-radius: 15px;
      overflow: hidden;

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
    margin: 0 12rem;
    .div1,
    .div2 {
      display: flex;
      flex-direction: row-reverse;
      .img {
        width: 40%;
        img {
          height: 100%;
        }
      }
      .info,
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
    .div2 {
      flex-direction: row;
    }
  }
`;

export default Header;

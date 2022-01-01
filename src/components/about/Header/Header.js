import React from "react";
import styled from "styled-components";
import ImageMobile1 from "../../../assets/about/mobile/image-about-hero.jpg";

function Header() {
  return (
    <HeaderWrap>
      <div className="img">
        <img src={ImageMobile1} alt={ImageMobile1} />
      </div>
      <div className="info">
        <h1>About Us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  .img {
    height: 32rem;
    img {
      width: 100%;
      background-size: cover;
    }
  }
  .info {
    height: 48rem;
    background-color: var(--color-primary-peach);
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
`;

export default Header;

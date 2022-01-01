import React from "react";
import styled from "styled-components";
import ImageMobile3 from "../../../assets/about/mobile/image-real-deal.jpg";

function Main2() {
  return (
    <Wrap>
      <div className="img">
        <img src={ImageMobile3} alt={ImageMobile3} />
      </div>
      <div className="info2">
        <h1>The real deal</h1>
        <p>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success. <br /> <br /> We are visual storytellers
          in appealing and captivating ways. By combining business and marketing
          strategies, we inspire audiences to take action and drive real
          results.
        </p>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 12rem 0;
  .img {
    height: 32rem;
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
`;

export default Main2;

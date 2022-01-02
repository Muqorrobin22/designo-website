import React from "react";
import styled from "styled-components";

function ShowCast({ images, title, desc }) {
  return (
    <ShowCastWrap>
      <div className="img">
        <img src={images} alt={images} />
      </div>
      <div className="description">
        <h1> {title} </h1>
        <p> {desc} </p>
      </div>
    </ShowCastWrap>
  );
}

const ShowCastWrap = styled.div`
  border-radius: 15px;
  overflow: hidden;
  background-color: #fdf3f0;
  margin-top: 4rem;
  .img {
    height: 70%;
    img {
      width: 100%;
      background-size: cover;
    }
  }
  .description {
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.2rem 2.9rem;
    h1 {
      font-family: Jost;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 26px;
      /* identical to box height, or 130% */

      text-align: center;
      letter-spacing: 5px;
      width: 26rem;
      color: #e7816b;
    }
    p {
      width: 26.7rem;
      font-family: Jost;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      /* or 162% */

      text-align: center;

      color: #333136;
    }
  }
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
    transform: translateY(-1rem);
    background-color: var(--color-primary-peach);
    .description p,
    .description h1 {
      color: white;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    .description {
      transform: translateY(50%);
    }
  }
`;

export default ShowCast;

import React from "react";
import styled from "styled-components";

function Location({ Images, title, address, contact1, contact2 }) {
  return (
    <Wrap>
      <div className="img">
        <img src={Images} alt={Images} />
      </div>
      <div className="info2">
        <h1> {title} </h1>
        <div className="information">
          <div>
            <h2>Designo Central Office</h2>
            <p>{address}</p>
          </div>
          <div>
            <h2>Contact </h2>
            <p>{contact1}</p>
            <p>{contact2}</p>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
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
    text-align: center;
    div {
      p {
        width: 25rem;
      }
    }
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
    .img {
      margin: 4rem;
      border-radius: 15px;
      overflow: hidden;
    }
    .info2 {
      margin: 4rem 4rem 12rem 4rem;
      border-radius: 15px;
      overflow: hidden;
    }
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    padding: 0 16.5rem;
    .img {
      width: 40%;
      img {
        height: 32.6rem;
      }
    }
    .info2 {
      width: 80%;
      height: 32.6rem;
      align-items: flex-start;
      padding: 8.8rem 9.5rem;
      box-sizing: border-box;
      h1 {
      }
      .information {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        width: 80%;
        h2,
        p {
          text-align: left;
          width: 25.5rem;
        }
      }
    }
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`;
export default Location;

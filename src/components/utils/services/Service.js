import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/shared/desktop/icon-right-arrow.svg";
import Zoom from "react-reveal/Zoom";

function Service({ images, title, margin, to, grid }) {
  return (
    <Zoom>
      <ServiceWrap images={images} margin={margin} grid={grid}>
        <div className="info">
          <h1> {title} </h1>
          <div className="link" role="navigation">
            <Link to={`/${to}`}>View Project</Link>
            <Arrow />
          </div>
        </div>
        <div className="overlay"></div>
      </ServiceWrap>
    </Zoom>
  );
}

const ServiceWrap = styled.div`
  width: 327px;
  height: 250px;
  background: url(${(props) => (props.images ? props.images : null)});
  background-size: cover;
  border-radius: 15px;
  mix-blend-mode: color;
  position: relative;
  margin-top: ${(props) => (props.margin ? "2.4rem" : 0)};
  overflow: hidden;
  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 10;
    h1 {
      font-family: Jost;
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 36px;
      width: 21.5rem;
      letter-spacing: 1.4px;
    }
    .link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 19.7rem;
    }
    a {
      font-family: Jost;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 22px;
      letter-spacing: 5px;
      text-transform: uppercase;
      text-decoration: none;
      color: white;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  &:hover {
    .overlay {
      background-color: var(--color-primary-peach);
    }
  }
  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 2;
    background-color: black;
    opacity: 0.5;
    transition: all 0.3s ease;
  }
  @media (min-width: 768px) {
    width: 68.9rem;
    .info {
      text-align: center;
      h1 {
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        /* identical to box height, or 120% */

        letter-spacing: 2px;

        color: #ffffff;
        width: 50rem;
      }
      .link {
        margin: 0 auto;
      }
    }
  }

  @media (min-width: 1440px) {
    width: 54.1rem;
    height: ${(props) => (props.grid ? "67rem" : "30.8rem")};
  }
`;

export default Service;

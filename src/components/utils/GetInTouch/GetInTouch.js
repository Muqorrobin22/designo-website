import React from "react";
import styled from "styled-components";
import { Button1 } from "../Buttons/Button";
import { ReactComponent as Overlay } from "../../../assets/shared/desktop/bg-pattern-call-to-action.svg";

function GetInTouch() {
  return (
    <TouchWrap overlay={Overlay}>
      <div className="text">
        <h1>Let’s talk about your project</h1>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className="button">
        <Button1 dark to="/contact">
          Get In touch
        </Button1>
      </div>
    </TouchWrap>
  );
}

const TouchWrap = styled.div`
  position: absolute;
  width: 90%;
  text-align: center;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-evenly;
  height: 38rem;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
  background-image: url(${(props) => (props.overlay ? Overlay : null)});
  background-color: var(--color-primary-peach);
  .text {
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
      /* or 112% */
      color: white;
      text-align: center;
      width: 27.9rem;
    }
    p {
      font-family: Jost;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 25px;
      color: white;
      width: 27.9rem;
      text-align: center;
      margin-bottom: 3.2rem;
    }
  }

  @media (min-width: 1440px) {
    width: 111rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 9.5rem;
    box-sizing: border-box;
    .text {
      h1 {
        font-size: 4.8rem;
        text-align: left;
        width: 37rem;
      }
      p {
        text-align: left;
        font-size: 1.6rem;
        width: 37rem;
      }
    }
  }
`;

export default GetInTouch;

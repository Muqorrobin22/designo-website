import React from "react";
import styled from "styled-components";
import { Button1 } from "../../utils/Buttons/Button";
import Input, { TextArea } from "../../utils/Inputs/Input";
import Zoom from "react-reveal/Zoom";

function Header() {
  return (
    <HeaderWrap>
      <div className="wrap">
        <div className="wrapText">
          <Zoom right cascade>
            <h1>Contact us</h1>
          </Zoom>
          <Zoom left cascade>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </Zoom>
        </div>
        <div className="wrapInput">
          <div className="inputs">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email Address" />
            <Input type="number" placeholder="Phone" />
            <TextArea placeholder="Your Messages" />
          </div>
          <div className="button">
            <Zoom>
              <Button1 to="/contact" dark>
                Submit
              </Button1>
            </Zoom>
          </div>
        </div>
      </div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  height: 75rem;
  background-color: var(--color-primary-peach);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrap {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    h1 {
      font-family: Jost;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 36px;
      /* identical to box height, or 112% */

      text-align: center;

      color: #ffffff;
      width: 95%;
    }
    p {
      font-family: Jost;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 25px;
      /* or 167% */

      text-align: center;

      color: #ffffff;
      margin: 2.4rem 0 4.8rem 0;
      width: 90%;
    }
    .inputs {
      width: 95%;
    }

    .wrapInput {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .button {
        align-self: center;
        margin-top: 6rem;
      }
    }

    .wrapText {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (min-width: 768px) {
    margin: 4rem 4rem 12rem 4rem;
    padding: 7.1rem;
    .wrap {
      h1 {
        font-size: 4.8rem;
        text-align: left;
        width: 90%;
      }
      p {
        font-size: 1.6rem;
        text-align: left;
        width: 90%;
      }
      .inputs {
        width: 90%;
      }
      .wrapInput {
        .button {
          margin-top: 6rem;
          align-self: flex-end;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    margin: 1rem 16.5rem;
    height: 48rem;
    .wrap {
      display: flex;
      flex-direction: row;
      .wrapText {
        p,
        h1 {
          width: 80%;
        }
      }
      .wrapInput {
        .button {
          align-self: flex-end;
        }
      }
    }
  }
`;

export default Header;

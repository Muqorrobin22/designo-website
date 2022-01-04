import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/shared/desktop/logo-light.png";
import { ReactComponent as Instagram } from "../../../assets/shared/desktop/icon-instagram.svg";
import { ReactComponent as Twitter } from "../../../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as Fb } from "../../../assets/shared/desktop/icon-facebook.svg";
import { NavLink } from "react-router-dom";
import GetInTouch from "../../utils/GetInTouch/GetInTouch";

const isActive = ({ isActive }) => {
  return {
    opacity: isActive ? "0.3" : "",
  };
};

export function Footer() {
  return (
    <FooterWrap>
      <div className="row1">
        <img src={Logo} alt={Logo} />

        <ul>
          <li>
            <NavLink to="/about" style={isActive}>
              our company
            </NavLink>
          </li>
          <li>
            <NavLink to="/location" style={isActive}>
              locations
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={isActive}>
              contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="row2">
        <p>
          Designo Central Office <br /> 3886 Wellington Street <br /> Toronto,
          Ontario M9C 3J5
        </p>
        <p>
          Contact Us (Central Office) <br /> P : 123456778 <br /> M:
          contact@designo.co
        </p>
        <p>
          Copyright 2022{" "}
          <a href="https://www.instagram.com/muqorrobinn__/">
            &copy;Muqorrobin
          </a>
          .
          <br /> All Rights Reserved
        </p>
        <div className="social">
          <Instagram href="https://www.instagram.com/muqorrobinn__/" />
          <Twitter />
          <Fb />
        </div>
      </div>
    </FooterWrap>
  );
}

export function FooterWithGetInTouch() {
  return (
    <FooterWrapInGetTouch>
      <GetInTouch />
      <div className="row1">
        <img src={Logo} alt={Logo} />

        <ul>
          <li>
            <NavLink to="/about" style={isActive}>
              our company
            </NavLink>
          </li>
          <li>
            <NavLink to="/location" style={isActive}>
              locations
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={isActive}>
              contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="row2">
        <p>
          Designo Central Office <br /> 3886 Wellington Street <br /> Toronto,
          Ontario M9C 3J5
        </p>
        <p>
          Contact Us (Central Office) <br /> P : 123456778 <br /> M:
          contact@designo.co
        </p>
        <p>
          Copyright 2022{" "}
          <a href="https://www.instagram.com/muqorrobinn__/">
            &copy;Muqorrobin
          </a>
          .
          <br /> All Rights Reserved
        </p>
        <div className="social">
          <Instagram href="https://www.instagram.com/muqorrobinn__/" />
          <Twitter />
          <Fb />
        </div>
      </div>
    </FooterWrapInGetTouch>
  );
}

const FooterWrap = styled.footer`
  margin-top: 12rem;
  padding: 5.6rem 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary-black);
  .row1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 50%;
  }
  .social {
    display: flex;
    margin-top: 3.2rem;
    width: 15rem;
    justify-content: space-around;
    align-items: center;
  }

  ul {
    padding: 5rem 0 4rem 0;
    text-align: center;
    li {
      list-style: none;
      padding-top: 2rem;
      a {
        text-decoration: none;
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;

        letter-spacing: 2px;
        text-transform: uppercase;
        color: white;
      }
    }
  }
  p {
    font-family: Jost;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    color: white;
    opacity: 0.5;
    a {
      color: white;
      text-decoration: none;
    }
  }
  .row2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 768px) {
    .row1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-left: 10rem;
      img {
        width: 20.2rem;
      }
      ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        li {
          padding: 0;
        }
        p {
          font-size: 1.4rem;
        }
      }
    }
    .row2 {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-around;
      width: 100%;
      p {
        text-align: left;
      }
      .social {
        align-self: flex-end;
      }
    }
  }

  @media (min-width: 1440px) {
    padding-left: 16.5rem;
    padding-right: 16.5rem;
    .row1 {
      padding-left: 10rem;
      img {
        width: 20.2rem;
      }
    }
  }
`;

const FooterWrapInGetTouch = styled(FooterWrap)`
  position: relative;
  margin-top: 30rem;
  @media (min-width: 1440px) {
    margin-top: 31rem;
  }
  .row1 {
    margin-top: 25rem;
  }
`;

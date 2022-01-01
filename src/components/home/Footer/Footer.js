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
      <img src={Logo} alt={Logo} />

      <ul>
        <li>
          <NavLink to="/" style={isActive}>
            our company
          </NavLink>
        </li>
        <li>
          <NavLink to="/stories" style={isActive}>
            locations
          </NavLink>
        </li>
        <li>
          <NavLink to="/features" style={isActive}>
            contact
          </NavLink>
        </li>
      </ul>
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
        <a href="https://www.instagram.com/muqorrobinn__/">&copy;Muqorrobin</a>.
        <br /> All Rights Reserved
      </p>
      <div className="social">
        <Instagram href="https://www.instagram.com/muqorrobinn__/" />
        <Twitter />
        <Fb />
      </div>
    </FooterWrap>
  );
}

export function FooterWithGetInTouch() {
  return (
    <FooterWrapInGetTouch>
      <GetInTouch />
      <img src={Logo} alt={Logo} />

      <ul>
        <li>
          <NavLink to="/" style={isActive}>
            our company
          </NavLink>
        </li>
        <li>
          <NavLink to="/stories" style={isActive}>
            locations
          </NavLink>
        </li>
        <li>
          <NavLink to="/features" style={isActive}>
            contact
          </NavLink>
        </li>
      </ul>
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
        <a href="https://www.instagram.com/muqorrobinn__/">&copy;Muqorrobin</a>.
        <br /> All Rights Reserved
      </p>
      <div className="social">
        <Instagram href="https://www.instagram.com/muqorrobinn__/" />
        <Twitter />
        <Fb />
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
  img {
    width: 100%;
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
    line-height: 26px;
    text-align: center;
    color: white;
    opacity: 0.5;
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

const FooterWrapInGetTouch = styled(FooterWrap)`
  position: relative;
  margin-top: 31rem;
  img {
    margin-top: 25rem;
  }
`;

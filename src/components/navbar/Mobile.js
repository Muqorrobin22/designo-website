import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const isActive = ({ isActive }) => {
  return {
    textDecoration: isActive ? "underline" : "none",
  };
};

function Mobile() {
  return (
    <Fragment>
      <MenuWrap>
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
      </MenuWrap>
      <Overlay></Overlay>
    </Fragment>
  );
}

const MenuWrap = styled.div`
  height: 23.5rem;
  background-color: var(--color-primary-black);
  z-index: 200;
  animation: slideIn 0.2s ease-in forwards;
  position: absolute;
  top: 9.6rem;
  left: 0;
  right: 0;
  ul {
    padding: 4.8rem 2.4rem;
    width: 100%;

    li {
      list-style: none;
      padding-top: 2rem;
      a {
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 25px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: var(--color-primary-white);
      }
    }
  }
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-50%);
    }
    to {
      opacity: 1;

      transform: translateX(0);
    }
  }

  @media (min-width: 768px) {
    & {
      display: none;
      visibility: hidden;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 9.6rem;
  bottom: 0;
  height: 350rem;
  background-color: black;
  opacity: 0.5;
  z-index: 100;
`;

export default Mobile;

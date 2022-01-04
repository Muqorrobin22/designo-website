import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Button1({ children, to, dark }) {
  return (
    <Link to={to}>
      <ButtonWrap1>{children}</ButtonWrap1>
    </Link>
  );
}

const ButtonWrap1 = styled.button`
  font-family: Jost;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  cursor: pointer;
  box-sizing: border-box;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  background-color: ${(props) =>
    props.dark
      ? "var(--color-secondary-white)"
      : "var(--color-primary-peach)}"};
  border: none;
  outline: none;
  border-radius: 8px;
  height: 5.6rem;
  padding: 1.8rem 2.4rem;
  transition: all 0.3s ease;
  z-index: 5;
  a {
    text-decoration: none;
    color: ${(props) => (props.dark ? "black" : "white")};
  }
  &:hover {
    background-color: var(--color-secondary-peach);
    color: white;
  }
`;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Logo from "../../assets/shared/desktop/logo-dark.png";
import { ReactComponent as Menu } from "../../assets/shared/mobile/icon-hamburger.svg";
import { ReactComponent as Close } from "../../assets/shared/mobile/icon-close.svg";
import Mobile from "./Mobile";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const isActive = ({ isActive }) => {
  return {
    opacity: isActive ? "0.3" : "",
  };
};

const LinkVariants = {
  visible: {
    scale: 1.2,
    opacity: 0.3,
    transition: {
      type: "spring",
      stifness: 300,
    },
  },
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <NavWrap>
      <NavLink to="/">
        <img src={Logo} alt={Logo} />
      </NavLink>

      {!isMenuOpen ? (
        <Menu onClick={toggleMenuOpen} className="hidden"></Menu>
      ) : (
        <Close onClick={toggleMenuOpen} className="hidden"></Close>
      )}
      {isMenuOpen &&
        ReactDOM.createPortal(
          <Mobile />,
          document.getElementById("overlay_background")
        )}

      <motion.div
        className="nav"
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -500, opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
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
      </motion.div>
    </NavWrap>
  );
}

const NavWrap = styled.nav`
  height: 9.6rem;
  background-color: var(--pure-white);
  display: flex;
  align-items: center;
  padding: 0 2.4rem;
  justify-content: space-between;
  z-index: 210;

  img {
    width: 20.2rem;
  }

  .nav {
    display: none;
  }

  @media (min-width: 768px) {
    .hidden {
      display: none;
    }
    .nav {
      display: block;
      ul {
        padding: 0;
        text-align: center;
        display: flex;
        justify-content: space-around;
        li {
          list-style: none;
          padding-left: 1.7rem;
          a {
            text-decoration: none;
            font-family: DM Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 1.2rem;
            line-height: 20px;
            text-align: center;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            color: black;
          }
        }
      }
    }
  }
`;

export default Navbar;

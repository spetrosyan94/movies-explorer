import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";
import './Header.css';

import Logo from "../Logo/Logo";

function Header(props) {

  const location = useLocation().pathname;
  const className = `header ${location === "/" && "header_color-main"}`;


  return (
    <header className={className}>
      <div className="header__container">
        <Logo></Logo>
        <Navigation
          loggedIn={props.loggedIn}
          isOpenBurgerMenu={props.isOpenBurgerMenu}
          windowWidth={props.windowWidth}
        >
        </Navigation>
      </div>
    </header>
  )
}

export default Header;

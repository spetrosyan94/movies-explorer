import React from "react";
import { Link, } from "react-router-dom";
import './Logo.css';

import logo from '../../images/svg/logo.svg';

function Logo() {

  return (
    <Link to="/" className="logo">
      <img className="logo__img" src={logo} alt="Логотип проекта Movies Explorer" />
    </Link>
  )
}

export default Logo;

import React from "react";
import "./AccountMenu.css";

import { Link } from "react-router-dom";

function AccountMenu(props) {


  return (

    <Link to="/profile" className="account-menu" onClick={props.onClose}>Аккаунт
      <div className="account-menu__logo"> </div>
    </Link>

  )
}

export default AccountMenu;

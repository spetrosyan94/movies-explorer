import React from "react";
import { Link } from "react-router-dom";
import "./AuthMenu.css";

function AuthMenu() {


  return (

    <div className="auth-menu">
      <Link to="/signup" className="auth-menu__reg-btn">Регистрация</Link>
      <Link to="signin" className="auth-menu__signin-btn">Войти</Link>
    </div>

  )
}

export default AuthMenu;

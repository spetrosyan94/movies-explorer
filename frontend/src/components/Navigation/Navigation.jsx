import React from "react";
import "./Navigation.css";

import ButtonBurger from "../ButtonBurger/ButtonBurger";
import AuthMenu from "../AuthMenu/AuthMenu";
import AccountMenu from "../AccountMenu/AccountMenu";
import MoviesMenu from "../MoviesMenu/MoviesMenu";


function Navigation(props) {


  return (
    <>
      <nav className="navigation">
        {props.windowWidth >= 956 ? (
          <>
            {props.loggedIn
              ? <>
                <MoviesMenu />
                <AccountMenu />
              </>
              : <AuthMenu />}
          </>
        )
          : (
            <>
              {props.loggedIn && <ButtonBurger onClick={props.isOpenBurgerMenu} />}
              {!props.loggedIn && <AuthMenu />}
            </>
          )}
      </nav>
    </>
  )
}

export default Navigation;

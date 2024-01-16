import React from "react";
import "./Navigation.css";

import ButtonBurger from "../ButtonBurger/ButtonBurger";
import AuthMenu from "../AuthMenu/AuthMenu";
import AccountMenu from "../AccountMenu/AccountMenu";
import MoviesMenu from "../MoviesMenu/MoviesMenu";

// Хук для определения ширины экрана
import useResize from "../../hooks/useResize";

function Navigation(props) {

  // Хук для определения ширины экрана
  const windowWidth = useResize();


  return (
    <>
      <nav className="navigation">
        {windowWidth >= 956 ? (
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

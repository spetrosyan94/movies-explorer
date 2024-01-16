import React from "react";
import "./Navigation.css";

import ButtonBurger from "../ButtonBurger/ButtonBurger";
import AuthMenu from "../AuthMenu/AuthMenu";
import AccountMenu from "../AccountMenu/AccountMenu";
import MoviesMenu from "../MoviesMenu/MoviesMenu";

function Navigation(props) {

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    // Обработчик изменения размера окна
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Добавляем слушателя события изменения размера окна
    window.addEventListener('resize', handleResize);

    return () => {
      // Убираем слушателя события при размонтировании компонента
      window.removeEventListener('resize', handleResize);
    }
    // Пустой массив зависимостей означает, что эффект будет выполняться только при монтировании и размонтировании компонента
  }, []);

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

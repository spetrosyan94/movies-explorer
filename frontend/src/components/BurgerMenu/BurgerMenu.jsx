import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";

import ButtonClose from "../ButtonClose/ButtonClose";
import AccountMenu from "../AccountMenu/AccountMenu";
import Overlay from "../Overlay/Overlay";

function BurgerMenu(props) {


  return (
    <Overlay isOpen={props.isOpen}>
      {/* <main className='burger-menu'> */}
      <section className={`burger-menu ${props.isOpen ? 'burger-menu_active' : ''}`}>
        <ButtonClose onClick={props.onClose} />

        <nav>
          <ul className="burger-menu__link-list">
            <li>
              <NavLink to="/" className="burger-menu__link" onClick={props.onClose}>Главная</NavLink>
            </li>

            <li>
              <NavLink to="/movies" className="burger-menu__link" onClick={props.onClose}>Фильмы</NavLink>
            </li>

            <li>
              <NavLink to="/saved-movies" className="burger-menu__link" onClick={props.onClose}>Сохранённые фильмы</NavLink>
            </li>
          </ul>
        </nav>

        <AccountMenu onClose={props.onClose} />
      </section>
      {/* </main> */}
    </Overlay>
  )
}

export default BurgerMenu;

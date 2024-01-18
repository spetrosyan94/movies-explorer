import React from "react";
import "./MoviesMenu.css";

import { NavLink } from "react-router-dom";

function MoviesMenu() {


  return (
    <ul className="movies-menu">

      <li className="movies-menu__item">
        <NavLink to="/movies" className="movies-menu__link">Фильмы</NavLink>
      </li>


      <li className="movies-menu__item">
        <NavLink to="/saved-movies" className="movies-menu__link">Сохранённые фильмы</NavLink>
      </li>

    </ul>
  )
}

export default MoviesMenu;

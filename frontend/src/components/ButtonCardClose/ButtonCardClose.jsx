import React from "react";
import './ButtonCardClose.css';

function ButtonCardClose(props) {

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const CardCloseButtonClassName = (`button-card-close ${props.className}`)

  return (
    <button
      className={CardCloseButtonClassName}
      onClick={props.onDeleteMovies}
      type="button"
      aria-label="Кнопка лайка">
    </button>
  )
}

export default ButtonCardClose;

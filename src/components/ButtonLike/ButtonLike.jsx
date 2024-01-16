import React from "react";
import './ButtonLike.css';

function ButtonLike(props) {

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const CardLikeButtonClassName = (`button-like ${props.isSaved && 'button-like_active'} ${props.className}`)


  return (
    <button
      className={CardLikeButtonClassName}
      onClick={props.handleMoviesAction}
      type="button"
      aria-label="Кнопка лайка">
    </button>
  )
}

export default ButtonLike;

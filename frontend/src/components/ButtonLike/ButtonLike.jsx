import React from "react";
import './ButtonLike.css';

function ButtonLike(props) {

  const [isPressed, setIsPressed] = React.useState(false);

  function handleClick() {
    props.handleMoviesAction();
    setIsPressed(true);
  }

  function handleAnimationEnd() {
    setIsPressed(false);
  }

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const CardLikeButtonClassName = (`button-like ${props.isSaved && 'button-like_active'} ${isPressed && 'button-like_pressed'}`)


  return (
    <button
      className={CardLikeButtonClassName}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      type="button"
      aria-label="Кнопка лайка">
    </button>
  )
}

export default ButtonLike;

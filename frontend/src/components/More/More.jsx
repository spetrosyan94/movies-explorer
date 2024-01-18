import React from "react";
import './More.css';

function More(props) {



  return (
    <section className="more">

      {!props.savedMovies &&
        <button
          className="more__button"
          onClick={props.onClick}
          type="button"
          aria-label="Кнопка показать еще фильмы"
        >Ещё</button>
      }
    </section>
  )
}

export default More;

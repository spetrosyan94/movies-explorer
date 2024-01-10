import React from "react";
import './MoviesCard.css';

import cardImage1 from '../../images/jpeg/card-img-1.jpg';
import ButtonLike from "../ButtonLike/ButtonLike";
import ButtonCardClose from "../ButtonCardClose/ButtonCardClose";
import { useLocation } from "react-router-dom";

function MoviesCard() {

  const location = useLocation().pathname;

  return (
    <>

      <li className="card"
      >
        <img className="card__img" alt={`Постер фильма `} src={cardImage1} />
        <h3 className="card__title">33 слова о дизайне</h3>

        {location === "/movies"
          ? <ButtonLike />
          : <ButtonCardClose />
        }

        <p className="card__duration">1ч 42м</p>
      </li>

      <li className="card"
      >
        <img className="card__img" alt={`Постер фильма `} src={cardImage1} />
        <h3 className="card__title">33 слова о дизайне</h3>

        {location === "/movies"
          ? <ButtonLike />
          : <ButtonCardClose />
        }

        <p className="card__duration">1ч 42м</p>
      </li>

      <li className="card"
      >
        <img className="card__img" alt={`Постер фильма `} src={cardImage1} />
        <h3 className="card__title">33 слова о дизайне</h3>

        {location === "/movies"
          ? <ButtonLike />
          : <ButtonCardClose />
        }

        <p className="card__duration">1ч 42м</p>
      </li>

      <li className="card"
      >
        <img className="card__img" alt={`Постер фильма `} src={cardImage1} />
        <h3 className="card__title">33 слова о дизайне</h3>

        {location === "/movies"
          ? <ButtonLike />
          : <ButtonCardClose />
        }

        <p className="card__duration">1ч 42м</p>
      </li>

      <li className="card"
      >
        <img className="card__img" alt={`Постер фильма `} src={cardImage1} />
        <h3 className="card__title">33 слова о дизайне</h3>

        {location === "/movies"
          ? <ButtonLike />
          : <ButtonCardClose />
        }

        <p className="card__duration">1ч 42м</p>
      </li>

      <li className="card"
      >
        <img className="card__img" alt={`Постер фильма `} src={cardImage1} />
        <h3 className="card__title">33 слова о дизайне</h3>

        {location === "/movies"
          ? <ButtonLike />
          : <ButtonCardClose />
        }

        <p className="card__duration">1ч 42м</p>
      </li>

      <li className="card"
      >
        <img className="card__img" alt={`Постер фильма `} src={cardImage1} />
        <h3 className="card__title">33 слова о дизайне</h3>

        {location === "/movies"
          ? <ButtonLike />
          : <ButtonCardClose />
        }

        <p className="card__duration">1ч 42м</p>
      </li>

    </>
  )
}

export default MoviesCard;

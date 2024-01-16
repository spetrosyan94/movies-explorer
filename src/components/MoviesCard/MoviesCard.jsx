import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css';

import cardImage1 from '../../images/jpeg/card-img-1.jpg';

import { BASE_URL_MOVIES, } from "../../utils/constants";
import { formatDuration } from "../../utils/utils";
import ButtonLike from "../ButtonLike/ButtonLike";
import ButtonCardClose from "../ButtonCardClose/ButtonCardClose";

function MoviesCard({ card, onAddMovies, onDeleteMovies, checkLikeMovies }) {

  const location = useLocation().pathname;
  const isSaved = checkLikeMovies(card)
  // Определение длительности фильма
  const formattedDuration = formatDuration(card?.duration);

  // Обработчик лайка и добавления фильма в сохранные
  function handleLikeMovie() {
    !isSaved && onAddMovies(card);
  }

  // Обработчик удаления лайка и удаления фильма из сохраненных
  function handleDeleteMovie() {
    isSaved && onDeleteMovies(card);
  }

  return (
    <>

      <li className="card"
      >
        <a
          className="card__link"
          href={card?.trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img className="card__img"
            alt={`Постер фильма ${card?.nameRU}`}
            src={
              location === "/movies"
                ? card?.image
                : card?.image
            }
          />
        </a>
        <h3 className="card__title">{card?.nameRU}</h3>

        {location === "/movies"
          ? <ButtonLike
            isSaved={isSaved}
            handleMoviesAction={!isSaved ? handleLikeMovie : handleDeleteMovie}
          />
          : <ButtonCardClose
            onDeleteMovies={handleDeleteMovie}
          />
        }

        <p className="card__duration">{formattedDuration}</p>

      </li>





      {/* <li className="card"
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
      </li> */}

    </>
  )
}

export default MoviesCard;

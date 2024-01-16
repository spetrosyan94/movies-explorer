import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";
import { handleSearchMovies } from "../../utils/utils";

import More from "../More/More";

// Хук для определения ширины экрана
import useResize from "../../hooks/useResize";

// Константы
import { SCREEN_SIZES, CARD_AMOUNTS, ADDED_CARD_AMOUNTS } from "../../utils/constants";

function MoviesCardList(props) {

  const location = useLocation().pathname;
  // Хук для определения ширины экрана
  const windowWidth = useResize();
  // Состояние для отслеживания видимого количества карточек
  const [visibleCardsCount, setVisibleCardsCount] = React.useState('');

  // Текст ошибки поиска при запросе
  const textError = props.errorInfo || 'Ничего не\u00A0найдено';

  // Фильтрация карточек с фильмами
  const filterMovies = handleSearchMovies(props.movies, props.searchQuery, props.shortFilm).slice(0, visibleCardsCount);

  // Проверяем, загружены ли все карточки
  const isLoadMoreCards = visibleCardsCount === filterMovies.length;

  // Определяем количество отображаемых карточек при монтировании компонента
  React.useEffect(() => {
    if (location === "/movies") {
      updateVisibleCardsCount();
    } else {
      setVisibleCardsCount(undefined);
    }

  }, [props.searchQuery]);


  // Определяем количество карточек для отображения в зависимости от ширины экрана
  function updateVisibleCardsCount() {
    let cardsToShow = CARD_AMOUNTS.BASE;

    if (windowWidth >= SCREEN_SIZES.DESKTOP) {
      cardsToShow = CARD_AMOUNTS.LARGE;
    } else if (windowWidth >= SCREEN_SIZES.TABLET) {
      cardsToShow = CARD_AMOUNTS.MEDIUM;
    } else if (windowWidth >= SCREEN_SIZES.MOBILE) {
      cardsToShow = CARD_AMOUNTS.SMALL;
    }
    setVisibleCardsCount(cardsToShow);
  }

  // Функция для загрузки дополнительного количества карточек
  function loadMoreCards() {
    let additionalCardsCount = ADDED_CARD_AMOUNTS.BASE;

    if (windowWidth >= SCREEN_SIZES.DESKTOP) {
      additionalCardsCount = ADDED_CARD_AMOUNTS.LARGE;
    } else if (windowWidth >= SCREEN_SIZES.TABLET) {
      additionalCardsCount = ADDED_CARD_AMOUNTS.MEDIUM;
    }

    const newVisibleCardsCount = visibleCardsCount + additionalCardsCount;
    setVisibleCardsCount(newVisibleCardsCount);
  };


  return (
    <section className="movies-card">
      {/* Показываем информацию, если поиск не дал результатов */}
      {props.searched && filterMovies.length === 0
        ? (!props.loading && <p className="movies-card__info">{textError}</p>)
        : (
          <>
            <ul className="cards">
              {/* Отображаем отфильтрованные карточки */}
              {filterMovies.map((card) => (
                <MoviesCard
                  card={card}
                  key={card.movieId}
                  onAddMovies={props.onAddMovies}
                  onDeleteMovies={props.onDeleteMovies}
                  checkLikeMovies={props.checkLikeMovies}
                />
              ))}
            </ul>

            {/* Показываем кнопку "Еще", если есть еще карточки */}
            {location === "/movies" && isLoadMoreCards &&
              <More onClick={loadMoreCards} />}
          </>
        )}
    </section>
  );
}

export default MoviesCardList;

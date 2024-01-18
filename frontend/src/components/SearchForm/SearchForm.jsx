import React from "react";
import './SearchForm.css';

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";

function SearchForm(props) {

  const [inputValue, setInputValue] = React.useState('');
  const [error, setIsError] = React.useState(false);

  // Заполнение инпута поиска при монтировании компонента
  React.useEffect(() => {
    setInputValue(props.searchQuery);
  }, []);

  // Обработчик изменения данных в инпуте поиска
  function handleChange(evt) {
    setInputValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSearch(inputValue);

    if (inputValue.trim() === "") {
      setIsError(true);
      return;
    } else {
      setIsError(false);
    }
  }


  return (
    <section className="search-form">
      <div className="search-form__container">

        <form className="form"
          id="search-form"
          name="search-form"
          noValidate
          onSubmit={handleSubmit}
        >
          <input
            className="form__search-input"
            form="search-form"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Фильм"
            value={inputValue}
            onChange={handleChange}
          ></input>
          <button className="form__submit-btn smooth-transition" type="submit" aria-label="Кнопка поиска фильмов"> Найти</button>

          <FilterCheckbox
            shortFilm={props.shortFilm}
            toggleShortMovies={props.toggleShortMovies}
          />

          {error &&
            <span className="form__search-error">Нужно ввести ключевое слово</span>}
        </form>

        {/* {props.loading && <Preloader />} */}

      </div>
    </section>
  )
}

export default SearchForm;

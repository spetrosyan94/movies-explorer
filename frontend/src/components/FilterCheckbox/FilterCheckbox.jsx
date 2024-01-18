import React from "react";
import './FilterCheckbox.css';


function FilterCheckbox(props) {


  return (
    <label className="filter-checkbox smooth-transition">Короткометражки
      <input
        className="filter-checkbox__toggle"
        type="checkbox"
        form="search-form"
        name="toggle-checkbox"
        checked={props.shortFilm}
        onChange={props.toggleShortMovies}
      />
      <span className="filter-checkbox__track"></span>
    </label>

  )
}

export default FilterCheckbox;

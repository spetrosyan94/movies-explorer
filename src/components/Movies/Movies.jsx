import React from "react";
import './Movies.css';

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

// Хук для сохранения данных в локальном хранилище
import { setLocalStorage } from "../../utils/utils";
// Контекст с данными
import { useMoviesContext } from "../../contexts/MoviesContext";

function Movies({ movies, getAllMovies, onAddMovies, onDeleteMovies, checkLikeMovies, loading, errorInfo }) {

  // Контекст с данными связанные с поиском фильма
  const {
    searchQuery,
    setSearchQuery,
    searched,
    setSearched,
    shortFilm,
    setShortFilm,
  } = useMoviesContext();

  // Функция первоначального поиска карточек с фильмами
  function handleSearch(query) {
    setSearchQuery(query);
    // setLocalStorage('searchQuery', query);

    if (!searched) {
      getAllMovies();
      setSearched(true);
    }
  }

  // Функция переключения фильтра короткометражек
  function handleShortMovies() {
    setShortFilm(!shortFilm);
    console.log('Переключатель фильтра короткометражек!');
  }


  return (
    <main className="movies">
      <SearchForm
        onSearch={handleSearch}
        searchQuery={searchQuery}
        shortFilm={shortFilm}
        toggleShortMovies={handleShortMovies}
        loading={loading}
      />
      <MoviesCardList
        movies={movies}
        shortFilm={shortFilm}
        searchQuery={searchQuery}
        searched={searched}
        onAddMovies={onAddMovies}
        onDeleteMovies={onDeleteMovies}
        checkLikeMovies={checkLikeMovies}
        loading={loading}
        errorInfo={errorInfo}
      />
    </main>
  )
}

export default Movies;

import React from "react";
import './Movies.css';

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

// Контекст с данными
import { useMoviesContext } from "../../contexts/MoviesContext";

function Movies({ movies, getAllMovies, onAddMovies, onDeleteMovies, checkLikeMovies, loading, windowWidth, errorInfo }) {

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
        windowWidth={windowWidth}
        errorInfo={errorInfo}
      />
    </main>
  )
}

export default Movies;

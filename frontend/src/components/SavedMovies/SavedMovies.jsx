import React from "react";
import './SavedMovies.css';

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

// Контекст
import { useMoviesContext } from "../../contexts/MoviesContext";

function SavedMovies({ movies, getAllMovies, onDeleteMovies, checkLikeMovies, loading, windowWidth, errorInfo }) {

  const { searched, setSearched, shortFilmSaved, setShortFilmSaved } = useMoviesContext();

  const [searchQuerySaved, setSearchQuerySaved] = React.useState('');

  // Функция первоначального поиска карточек с фильмами
  function handleSearch(query) {
    setSearchQuerySaved(query);
    setSearched(true);

    if (!searched) {
      getAllMovies();
      setSearched(true);
    }
  }

  // Функция переключения фильтра короткометражек
  function handleShortMoviesSaved() {
    setShortFilmSaved(!shortFilmSaved);
    console.log('Переключатель фильтра сохраненных короткометражек!');
  }



  return (
    <main className="saved-movies">
      <SearchForm
        onSearch={handleSearch}
        searchQuery={searchQuerySaved}
        shortFilm={shortFilmSaved}
        toggleShortMovies={handleShortMoviesSaved}
        loading={loading}
      />

      <MoviesCardList
        movies={movies}
        shortFilm={shortFilmSaved}
        searchQuery={searchQuerySaved}
        searched={searched}
        onDeleteMovies={onDeleteMovies}
        checkLikeMovies={checkLikeMovies}
        loading={loading}
        windowWidth={windowWidth}
        errorInfo={errorInfo}
      />
    </main>
  )
}

export default SavedMovies;

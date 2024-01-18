import { createContext, useContext, useEffect, useState } from 'react';

const MoviesContext = createContext();

export const useMoviesContext = () => useContext(MoviesContext);

//// Функция для извлечения данных из локального хранилища
const retrieveFromLocalStorage = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
};

/// Контекст для хранения данных с фильмами
export const MoviesProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(() => retrieveFromLocalStorage('searchQuery', ''));
  const [searched, setSearched] = useState(() => retrieveFromLocalStorage('searched', false));
  const [shortFilm, setShortFilm] = useState(() => retrieveFromLocalStorage('shortFilm', false));
  const [shortFilmSaved, setShortFilmSaved] = useState(() => retrieveFromLocalStorage('shortFilmSaved', false));

  /// Функция для очистки локального хранилища
  const resetMoviesContext = () => {
    setSearchQuery('');
    setSearched(false);
    setShortFilm(false);
    setShortFilmSaved(false);
  };

  /// Эффект для сохранения данных в локальном хранилище
  useEffect(() => {
    localStorage.setItem('searchQuery', JSON.stringify(searchQuery));
    localStorage.setItem('searched', JSON.stringify(searched));
    localStorage.setItem('shortFilm', JSON.stringify(shortFilm));
    localStorage.setItem('shortFilmSaved', JSON.stringify(shortFilmSaved))
  }, [searchQuery, searched, shortFilm, shortFilmSaved]);

  const contextValue = {
    searchQuery,
    setSearchQuery,
    searched,
    setSearched,
    shortFilm,
    setShortFilm,
    shortFilmSaved,
    setShortFilmSaved,
    resetMoviesContext,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

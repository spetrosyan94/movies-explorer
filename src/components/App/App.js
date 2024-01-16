import React from 'react';
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';

// Импорт стилей
import './App.css';

// Импорт компонентов
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

// Импорт контекста
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { MoviesProvider } from '../../contexts/MoviesContext';

import { getLocalStorage, correctMovies } from '../../utils/utils';

// Импорт API
import { register, login, signOut } from '../../utils/Auth';
import { addMovie, deleteMovie, getAllInfo, getUserMe, patchUser } from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi';


function App() {

  const navigate = useNavigate();

  const location = useLocation().pathname;
  const pathsHeader = ['/', '/profile', '/movies', '/saved-movies'];
  const pathsFooter = ['/', '/movies', '/saved-movies'];

  const [movies, setMovies] = React.useState(getLocalMovies());
  const [savedMovies, setSavedMovies] = React.useState([]);
  // Инициализация состояния с токеном из localStorage или null, если его нет
  const [token, setToken] = React.useState(() => { return getLocalStorage('userId') || null });

  // Инициализация состояния loggedIn на основе наличия токена
  const [loggedIn, setLoggedIn] = React.useState(!!token);
  const [loading, setLoading] = React.useState(false);
  // const [isRegister, setIsRegister] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [openBurgerMenu, setOpenBurgerMenu] = React.useState(false);

  const [errorInfo, setErrorInfo] = React.useState(null);

  // Переменная открытого попапа или меню
  const isOpen =
    openBurgerMenu;


  // Эффект получения данных пользователя и фильмов при монтировании компонента
  React.useEffect(() => {
    if (loggedIn) {
      getAllInfo()
        .then(([user, savedMovies]) => {
          setCurrentUser(user);
          setSavedMovies(savedMovies.reverse());
          console.log(savedMovies);
          console.log('Авторизация пройдена');
        })
        .catch((err) => {
          console.log(err);
          setErrorInfo(err);
        })
    } else {
      setLoggedIn(false);
    }
  }, [token, loggedIn]);


  // Обработчик для регистрации нового пользователя
  function handleRegister(data) {
    setLoading(true);
    register(data.name, data.email, data.password)
      .then(() => {
        // setIsRegister(true);
        handleLogin(data);
        navigate("/movies", { replace: true });

      })
      .catch((err) => {
        console.log(err);
        // setIsRegister(false);
        setErrorInfo(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function handleLogin(data) {
    setLoading(true);
    login(data.email, data.password)
      .then((login) => {
        localStorage.setItem('userId', login._id);
        setLoggedIn(true);

        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setErrorInfo(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function signOutUser() {
    setLoading(true);
    signOut()
      .then(() => {
        localStorage.clear();
        setLoggedIn(false);
        setCurrentUser({});
        setMovies([]);
        setSavedMovies([]);
      })
      .catch((err) => {
        console.log(err);
        setErrorInfo(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function editUser(name, email) {
    setLoading(true);
    patchUser(name, email)
      .then(() => {
        setCurrentUser({ name, email })
      })
      .catch((err) => {
        console.log(err);
        setErrorInfo(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  // Закрыть все попапы
  function closeAllPopups() {
    setOpenBurgerMenu(false);
    setErrorInfo(null);
  }

  function handleOpenBurgerMenu() {
    setOpenBurgerMenu(true);
  }

  // Запрос на получение фильмов с API
  function getAllMovies() {
    setLoading(true);
    getMovies()
      .then((movies) => {
        const moviesFormat = correctMovies(movies);
        setMovies(moviesFormat);
        localStorage.setItem('movies', JSON.stringify(moviesFormat));
      })
      .catch((err) => {
        console.log(err);
        setErrorInfo('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => {
        setLoading(false);
      })
  }

  // Запрос на получение фильмов сохраненных в локалальном хранилище
  function getLocalMovies() {
    const localMovies = localStorage.getItem('movies');
    if (localMovies) {
      // setMovies(JSON.parse(localMovies));
      return JSON.parse(localMovies);
    } else {
      return [];
    }
  }

  // Запрос на сохранение фильма пользователя
  function addtoSavedMovie(movie) {
    addMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
        setErrorInfo(err);
      })
  }

  // Запрос на удаление фильма пользователя
  function DeleteToSavedMovies(movie) {
    const movieId = movie._id || savedMovies.find((savedMovie) => savedMovie.movieId === movie.movieId)._id;

    deleteMovie(movieId)
      .then(() => {
        setSavedMovies((prevValue) =>
          // prevValue.filter((savedMovie) => savedMovie._id !== movieId));
          prevValue.filter((savedMovie) => savedMovie.movieId !== movie.movieId));
      })
      .catch((err) => {
        console.log(err);
        setErrorInfo(err);
      })
  }

  // Функция проверки наличия добавленного фильма в локальном хранилище
  function checkLikeMovies(movie) {
    return savedMovies.some((savedMovies) => savedMovies.movieId === movie.movieId);
  }

  // console.log(handleSearchMovies(getLocalMovies(), 'я', true));


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <MoviesProvider>

        <div className="app-container">

          {pathsHeader.includes(location) && (
            <Header
              isOpenBurgerMenu={handleOpenBurgerMenu}
              loggedIn={loggedIn}
            />
          )}

          <Routes>

            <Route path="/" element={<Main />} />

            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  loggedIn={loggedIn}
                  movies={movies}
                  getAllMovies={getAllMovies}
                  onAddMovies={addtoSavedMovie}
                  onDeleteMovies={DeleteToSavedMovies}
                  checkLikeMovies={checkLikeMovies}
                  loading={loading}
                  errorInfo={errorInfo}
                />
              }
            />

            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  movies={savedMovies}
                  getAllMovies={getAllMovies}
                  onDeleteMovies={DeleteToSavedMovies}
                  checkLikeMovies={checkLikeMovies}
                  loading={loading}
                  errorInfo={errorInfo}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  signOut={signOutUser}
                  loading={loading}
                  onEditUser={editUser}
                />
              }
            />

            <Route path="/signin" element={<Login onLogin={handleLogin} isError={errorInfo} setErrorInfo={setErrorInfo} loading={loading} />} />

            <Route path="/signup" element={<Register onRegister={handleRegister} isError={errorInfo} setErrorInfo={setErrorInfo} loading={loading} />} />


            {/* Лля перенаправления с несуществующих страниц */}
            <Route path="*" element={<Navigate to="/404" replace="true" />} />
            <Route path="/404" element={<NotFound />} />

          </Routes>

          {pathsFooter.includes(location) && <Footer />}

          <BurgerMenu
            isOpen={openBurgerMenu}
            onClose={closeAllPopups}
          ></BurgerMenu>

          {loading && <Preloader />}

        </div >

      </MoviesProvider>
    </CurrentUserContext.Provider>
  );
}

export default App;

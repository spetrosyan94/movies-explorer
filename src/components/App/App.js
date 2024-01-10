import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

import BurgerMenu from '../BurgerMenu/BurgerMenu';

import CurrentUserContext from '../../contexts/CurrentUserContext';



function App() {

  const [currentUser, setCurrentUser] = React.useState({ name: "Алешка" });
  const [openBurgerMenu, setOpenBurgerMenu] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(true);


  // Переменная открытого попапа или меню
  const isOpen =
    openBurgerMenu;

  const location = useLocation().pathname;
  const pathsHeader = ['/', '/profile', '/movies', '/saved-movies'];
  const pathsFooter = ['/', '/movies', '/saved-movies'];

  // Закрыть все попапы
  function closeAllPopups() {
    setOpenBurgerMenu(false);
  }

  function handleOpenBurgerMenu() {
    setOpenBurgerMenu(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="app-container">

        {pathsHeader.includes(location) && (
          <Header
            isOpenBurgerMenu={handleOpenBurgerMenu}
            loggedIn={loggedIn}
          />
        )}

        <Routes>

          <Route path="/" element={<Main />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/saved-movies" element={<SavedMovies />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/signin" element={<Login />} />

          <Route path="/signup" element={<Register />} />


          {/* Лля перенаправления с несуществующих страниц */}
          <Route path="*" element={<Navigate to="/404" replace="true" />} />
          <Route path="/404" element={<NotFound />} />

        </Routes>

        {pathsFooter.includes(location) && <Footer />}

        <BurgerMenu
          isOpen={openBurgerMenu}
          onClose={closeAllPopups}
        ></BurgerMenu>

      </div >

    </CurrentUserContext.Provider>
  );
}

export default App;

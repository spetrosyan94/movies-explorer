import React, { useContext } from "react";
import './Profile.css';

import ButtonFormSubmit from "../ButtonFormSubmit/ButtonFormSubmit";
import useFormWithValidation from "../../hooks/useFormWithValidation";

// Контекст
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useMoviesContext } from "../../contexts/MoviesContext";

function Profile(props) {

  const currentUser = useContext(CurrentUserContext);
  const { resetMoviesContext } = useMoviesContext();

  const { values, errors, isValid, handleChange, resetValidation } = useFormWithValidation();
  // Стейт кнопки редактирования инпутов в формы
  const [editForm, setIsEditForm] = React.useState(false);

  // Функция проверяет, совпадают ли значения инпутов с предыдущим, если да, кнопка сабмита отключена
  const checkValueInput =
    !isValid ||
    (values.name !== undefined && currentUser.name === values.name) ||
    (values.email !== undefined && currentUser.email === values.email);


  // Эффект сброса ошибок валидации полей формы при монтировании компонента
  React.useEffect(() => {
    resetValidation();
  }, [resetValidation]);


  function editInputForm() {
    setIsEditForm(true);
  }

  // Функция выхода из профиля пользователя и очистки данных локального хранилища
  function handleSignOut() {
    props.signOut();
    resetMoviesContext();
  }

  // Обработчик самбита формы
  function handleSubmit(evt) {
    evt.preventDefault();
    setIsEditForm(false);
    props.onEditUser(
      values.name,
      values.email
    );
  }

  return (

    <main className="profile">

      <section className="profile__container">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>

        <form className="profile__form"
          name="profile-form"
          id="profile-form"
          noValidate
          onSubmit={handleSubmit}
        >

          <div className="profile__labels-container">

            <label className="profile__label" type="name">
              <span className="profile__label-text">Имя</span>
              <input
                className={`profile__input `}
                onChange={handleChange}
                // value={values.name || currentUser.name}
                value={values.name !== undefined ? values.name : currentUser.name}
                disabled={!editForm}
                name="name"
                form="profile-form"
                type="text"
                required
                minLength="2"
                maxLength="30"
                placeholder="Введите новое имя"
              />
              <span className="profile__error">{errors.name || ''}</span>
            </label>


            <label
              className="profile__label"
              type="email"
            >
              <span className="profile__label-text">E-mail</span>
              <input
                className={`profile__input `}
                onChange={handleChange}
                // value={values.email || currentUser.email}
                value={values.email !== undefined ? values.email : currentUser.email}
                disabled={!editForm}
                name="email"
                form="profile-form"
                type="email"
                required
                placeholder="Введите новую почту"
              />
              <span className="profile__error">{errors.email || ''}</span>
            </label>


          </div>
          <div className="profile__btn-container">


            <span className="profile__error">{props.isError || ''}</span>
            {editForm
              ? <ButtonFormSubmit
                disabled={checkValueInput}
                textButton={props.loading ? "Сохранение..." : "Сохранить"}
              ></ButtonFormSubmit>
              : <>
                <button className="profile__btn-edit"
                  type="button"
                  onClick={editInputForm}
                >Редактировать</button>

                <button className="profile__btn-exit"
                  type="button"
                  onClick={handleSignOut}
                >Выйти из аккаунта</button>
              </>
            }

          </div>
        </form>



      </section>


    </main >

  )
}

export default Profile;

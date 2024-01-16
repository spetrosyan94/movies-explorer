import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Register.css';

import Logo from "../Logo/Logo";
import ButtonFormSubmit from "../ButtonFormSubmit/ButtonFormSubmit";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Register(props) {

  const { values, errors, isValid, handleChange, resetValidation } = useFormWithValidation();

  // Эффект сброса ошибок валидации полей формы при монтировании компонента
  React.useEffect(() => {
    resetValidation();
  }, [resetValidation])

  // При размонтировании компонента информация об ошибках очищается
  React.useEffect(() => {

    return () => {
      props.setErrorInfo(null);
    }
  }, []);

  // Обработчик самбита формы
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister(values);
  }

  return (

    <main className="register">

      <section className="register__container">

        <Logo></Logo>

        <h1 className="register__title">Добро пожаловать!</h1>

        <form className="register__form"
          name="register-form"
          id="register-form"
          noValidate
          onSubmit={handleSubmit}
        >

          <div className="register__labels-container">


            <label className="register__label" type="name">
              <span className="register__label-text">Имя</span>
              <input
                className={`register__input `}
                onChange={handleChange}
                value={values.name || ""}
                name="name"
                form="register-form"
                type="text"
                required
                minLength="2"
                maxLength="30"
                pattern="^[a-zA-Zа-яА-Я\s\-]+$"
                placeholder="Введите имя"
              ></input>
              <span className="register__error">{errors.name || ''}</span>
            </label>


            <label
              className="register__label"
              type="email"
            >
              <span className="register__label-text">E-mail</span>
              <input
                className={`register__input `}
                onChange={handleChange}
                value={values.email || ""}
                name="email"
                form="register-form"
                type="email"
                required
                placeholder="Введите почту"
              />
              <span className="register__error">{errors.email || ''}</span>
            </label>


            <label
              className="register__label"
              type="password"
            >
              <span className="register__label-text">Пароль</span>
              <input
                className={`register__input `}
                onChange={handleChange}
                value={values.password || ""}
                name="password"
                form="register-form"
                type="password"
                required
                minLength="6"
                maxLength="30"
                placeholder="Введите пароль"
              />
              <span className="register__error">{errors.password || ''}</span>
            </label>


          </div>
          <div className="register__btn-container">

            <span className="register__error">{props.isError || ''}</span>
            <ButtonFormSubmit
              textButton={props.loading ? "Регистрация..." : "Зарегистрироваться"}
              disabled={!isValid}
            />

            <p className="register__screen">Уже зарегистрированы?
              <Link to="/signin" className="register__link"> Войти</Link>
            </p>


          </div>
        </form>

      </section>

    </main >

  )
}

export default Register;

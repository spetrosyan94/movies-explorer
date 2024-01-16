import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Login.css';

import Logo from "../Logo/Logo";
import ButtonFormSubmit from "../ButtonFormSubmit/ButtonFormSubmit";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Login(props) {

  const currentUser = useContext(CurrentUserContext);

  const { values, errors, isValid, handleChange, resetValidation } = useFormWithValidation();

  // Эффект сброса ошибок валидации полей формы при монтировании компонента
  React.useEffect(() => {
    resetValidation();
  }, [resetValidation]);

  // При размонтировании компонента информация об ошибках очищается
  React.useEffect(() => {

    return () => {
      props.setErrorInfo(null);
    }
  }, []);

  // Обработчик самбита формы
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onLogin(values);
  }


  return (

    <main className="login">

      <section className="login__container">

        <Logo></Logo>

        <h1 className="login__title">Рады видеть!</h1>

        <form className="login__form"
          name="login-form"
          id="login-form"
          noValidate
          onSubmit={handleSubmit}
        >

          <div className="login__labels-container">

            <label
              className="login__label"
              type="email"
            >
              <span className="login__label-text">E-mail</span>
              <input
                className={`login__input `}
                onChange={handleChange}
                value={values.email || ""}
                name="email"
                form="register-form"
                type="email"
                required
                placeholder="Введите почту"
              />
              <span className="login__error">{errors.email || ''}</span>
            </label>

            <label
              className="login__label"
              type="password"
            >
              <span className="login__label-text">Пароль</span>
              <input
                className={`login__input `}
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
              <span className="login__error">{errors.password || ''}</span>
            </label>


          </div>
          <div className="login__btn-container">

            <span className="login__error">{props.isError || ''}</span>
            <ButtonFormSubmit
              textButton={props.loading ? "Выполняется процесс входа..." : "Войти"}
              disabled={!isValid}
            />

            <p className="login__screen">Ещё не зарегистрированы?
              <Link to="/signup" className="login__link"> Регистрация</Link>
            </p>


          </div>
        </form>



      </section>


    </main >

  )
}

export default Login;

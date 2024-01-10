import React, { useContext } from "react";
import './Login.css';

import Logo from "../Logo/Logo";
import ButtonFormSubmit from "../ButtonFormSubmit/ButtonFormSubmit";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

function Login() {

  const currentUser = useContext(CurrentUserContext);

  const [formInput, setFormInput] = React.useState({});

  // Стейт кнопки редактирования инпутов в формы
  const [editForm, setIsEditForm] = React.useState(false);
  // Стейт новых введенных данных в инпуте. Если данные прошлые, кнопка самбит будет выключена
  const [inputChanges, setInputChanges] = React.useState(false);
  // Объект useRef охраняет значения инпутов для сравнения при вводе новых значений
  const prevRefInput = React.useRef({
    name: formInput.name,
    email: formInput.email,
  });


  // Вносим полученные изменения с инпутов в стейт данных формы
  function handleInputChange(name, value) {
    setFormInput(prevFormInput => ({
      ...prevFormInput,
      [name]: value
    }));
  };

  // Функция проверяет, совпадают ли значения инпутов с предыдущим, если да, кнопка сабмита отключена
  function checkValueInput(name, value) {
    if (prevRefInput.current[name] !== value) {
      setInputChanges(true);
    } else {
      setInputChanges(false);
    }
  }

  // Получаем данные с каждого инпута используя деструктуризацию evt.target
  function handleChange(evt) {
    const { name, value } = evt.target;
    handleInputChange(name, value);
    checkValueInput(name, value);
  };

  function editInputForm() {
    setIsEditForm(true);
  }

  // Обработчик самбита формы
  function handleSubmit(evt) {
    evt.preventDefault();
    setIsEditForm(false);
    setInputChanges(false);
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
                value={formInput.email}
                name="email"
                form="login-form"
                // className={`login__input ${errors.email && 'login__input_error'}`}
                type="email"
                required
                placeholder="Введите почту"
              />
            </label>

            {/* <span className="login__error">{errors.email || ''}</span> */}
            <span className="login__error-name"> </span>


            <label
              className="login__label"
              type="password"
            >
              <span className="login__label-text">Пароль</span>
              <input
                className={`login__input `}
                // onChange={handleChange}
                // value={formInput.email}
                name="password"
                form="login-form"
                // className={`login__input ${errors.email && 'login__input_error'}`}
                type="password"
                required
                placeholder="Введите пароль"
              />
            </label>

            {/* <span className="login__error">{errors.email || ''}</span> */}
            <span className="login__error-name"> </span>

          </div>
          <div className="login__btn-container">

            <ButtonFormSubmit textButton="Войти"></ButtonFormSubmit>

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

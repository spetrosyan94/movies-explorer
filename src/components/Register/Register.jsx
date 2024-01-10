import React, { useContext } from "react";
import './Register.css';

import Logo from "../Logo/Logo";
import ButtonFormSubmit from "../ButtonFormSubmit/ButtonFormSubmit";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

function Register() {

  const currentUser = useContext(CurrentUserContext);

  const [formInput, setFormInput] = React.useState({
    name: "Алеша",
    email: "alesha@bk.ru"
  });

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

    // Обновляем данные при отправке формы
    prevRefInput.current = {
      name: formInput.name,
      email: formInput.email,
    };

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
                value={formInput.name}
                name="name"
                form="register-form"
                // className={`register__input ${errors.name && 'register__input_error'}`}
                type="text"
                required
                minLength="2"
                maxLength="30"
                pattern={'^[а-яА-Яa-zA-Z0-9]+$'}
                placeholder="Введите имя"
              ></input>
            </label>

            {/* <span className="register__error-name">{errors.name || ''}</span> */}
            <span className="register__error-name"> </span>


            <label
              className="register__label"
              type="email"
            >
              <span className="register__label-text">E-mail</span>
              <input
                className={`register__input `}
                onChange={handleChange}
                value={formInput.email}
                name="email"
                form="register-form"
                // className={`register__input ${errors.email && 'register__input_error'}`}
                type="email"
                required
                placeholder="Введите почту"
              />
            </label>

            {/* <span className="register__error">{errors.email || ''}</span> */}
            <span className="register__error-name"> </span>


            <label
              className="register__label"
              type="password"
            >
              <span className="register__label-text">E-mail</span>
              <input
                className={`register__input `}
                // onChange={handleChange}
                // value={formInput.email}
                name="password"
                form="register-form"
                // className={`register__input ${errors.email && 'register__input_error'}`}
                type="password"
                required
                placeholder="Введите пароль"
              />
            </label>

            {/* <span className="register__error">{errors.email || ''}</span> */}
            <span className="register__error-name"> </span>

          </div>
          <div className="register__btn-container">

            <ButtonFormSubmit textButton="Зарегистрироваться"></ButtonFormSubmit>

            <p className="register__screen">Уже зарегистрированы?
              <Link to="/signin" className="register__link"> Войти</Link>
            </p>


            {/* {editForm
              ? <ButtonFormSubmit disabled={!inputChanges} textButton="Зарегистрироваться"></ButtonFormSubmit>
              : <>
                <button className="register__btn-edit" type="button" onClick={editInputForm}>Редактировать</button>
                <button className="register__btn-exit" type="button">Выйти из аккаунта</button>
              </>
            } */}

          </div>
        </form>



      </section>


    </main >

  )
}

export default Register;

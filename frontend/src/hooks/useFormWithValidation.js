import React, { useCallback } from "react";
import isEmail from "validator/lib/isEmail";

// Константы
import { USER_NAME_REG_EXP } from "../utils/constants";

// Хук валидации формы
const useFormWithValidation = () => {
  const [values, setValues] = React.useState({
    name: "",   // или другое начальное значение
    email: ""
  });
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleChange(evt) {
    const target = evt.target;
    const { value, name } = target;

    // Проверка поля name регулярным выражением
    if (name === "name" && !new RegExp(USER_NAME_REG_EXP).test(value)) {
      target.setCustomValidity(
        "Имя должно содержать только кириллицу, латиницу, пробел или дефис."
      );
    } else if (name === "email" && !isEmail(value)) {
      target.setCustomValidity(
        "E-mail должен быть в формате name@mail.ru"
      );
    } else {
      target.setCustomValidity("");
    }

    // Обработчик полей
    setValues({ ...values, [name]: value });
    // Обработчик ошибок
    setErrors({ ...errors, [name]: target.validationMessage });
    // Проверка валидности формы
    setIsValid(target.closest("form").checkValidity());
  }

  // Обработчик сброса ошибок валидации полей формы
  const resetValidation = useCallback(
    (values = {}, errors = {}, isValid = false) => {
      setValues(values);
      setErrors(errors);
      setIsValid(isValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetValidation,
  };

}

export default useFormWithValidation;

import { BASE_URL_MAIN } from "./constants";

// Получение ответа от сервера в виде объекта, вернется либо успешный ответ от сервера,
// либо обработанный объект с ошибкой, который перейдет в блок catch
export function onResponse(res) {
  return res.ok
    ? res.json()
    : res.json().then((err) => Promise.reject(`Что-то пошло не так: ${res.status}. ${err.message}`));
};

// Функция регистрации пользователя
export function register(name, email, password) {
  return fetch(`${BASE_URL_MAIN}/signup`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(onResponse)
};

// Функция авторизации пользователя
export function login(email, password) {
  return fetch(`${BASE_URL_MAIN}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Accept": 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(onResponse)
};

// Функция выхода из аккаунта пользователя и удаления куки
export function signOut() {
  return fetch(`${BASE_URL_MAIN}/signout`, {
    method: "GET",
    credentials: 'include',
    headers: {
      "Accept": 'application/json',
      "Content-Type": "application/json",
    }
  })
};

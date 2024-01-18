import { BASE_URL_MOVIES } from "./constants";

// Получение ответа от сервера в виде объекта, вернется либо успешный ответ от сервера,
// либо обработанный объект с ошибкой, который перейдет в блок catch
function onResponse(res) {
  return res.ok
    ? res.json()
    : res.json().then((err) => Promise.reject(`Что-то пошло не так: ${res.status}. ${err.message}`));
}

// Функция получает массив с фильмами с API
export function getMovies() {
  return fetch(`${BASE_URL_MOVIES}/beatfilm-movies`, {
    method: "GET",
  })
    .then(onResponse);
}

import React from "react";
import './AboutMe.css';
import avatar from '../../../images/png/avatar.png';

function AboutMe() {


  return (
    <section className="about-me">
      <div className="about-me__container">

        <h2 className="about-me__title">Студент</h2>

        <article className="about-me__bio">
          <img className="about-me__img-avatar" src={avatar} alt="Фотография автора проекта" />
          <h3 className="about-me__subtitle">Сергей</h3>
          <p className="about-me__about-text">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__paragraph">Победитель грантовой-программы для разработчиков приложений ВКонтакте VK Fresh Code 2023. Фрилансер. Имею своё приложение в социальной сети ВКонтакте в каталоге VK Mini Apps.</p>
          <a className="about-me__link" href="https://github.com/spetrosyan94/" target="_blank" rel="noreferrer">Github</a>
        </article>
      </div>

    </section>
  )
}

export default AboutMe;

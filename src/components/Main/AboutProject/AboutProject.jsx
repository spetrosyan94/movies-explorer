import React from "react";
import './AboutProject.css';

function AboutProject() {


  return (
    <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>

        <ul className="about-project__text-list">

          <li className="about-project__text-element">
            <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>

          <li className="about-project__text-element">
            <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>

        <div className="about-project__progress-container">
          <div className="about-project__progress-element about-project__progress-element_second ">
            <p className="about-project__text about-project__text_color_second">1 неделя</p>
          </div>

          <div className="about-project__progress-element about-project__progress-element_first">
            <p className="about-project__text">4 недели</p>

          </div>

          <div className="about-project__progress-element">
            <p className="about-project__caption">Back-end</p>
          </div>

          <div className="about-project__progress-element">
            <p className="about-project__caption">Front-end</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutProject;

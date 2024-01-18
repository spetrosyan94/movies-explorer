import React from "react";
import './Techs.css';

function Techs() {


  return (
    <section className="techs">
      <div className="techs-container">

        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>


        <ul className="techs__list">

          <li className="techs__element">
            <p className="techs__element-text">HTML</p>
          </li>

          <li className="techs__element">
            <p className="techs__element-text">CSS</p>
          </li>

          <li className="techs__element">
            <p className="techs__element-text">JS</p>
          </li>

          <li className="techs__element">
            <p className="techs__element-text">React</p>
          </li>

          <li className="techs__element">
            <p className="techs__element-text">Git</p>
          </li>

          <li className="techs__element">
            <p className="techs__element-text">Express.js</p>
          </li>

          <li className="techs__element">
            <p className="techs__element-text">mongoDB</p>
          </li>

        </ul>

      </div>
    </section >
  )
}

export default Techs;

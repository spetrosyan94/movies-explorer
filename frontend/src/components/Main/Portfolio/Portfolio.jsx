import React from "react";
import './Portfolio.css';

function Portfolio() {


  return (

    <section className="portfolio">
      <div className="portfolio__container">

        <h3 className="portfolio__title">Портфолио</h3>

        <ul className="portfolio__list">

          <li className="portfolio__element">
            <a className="portfolio__link" href="https://github.com/spetrosyan94/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт <span>↗</span></a>
          </li>

          <li className="portfolio__element">
            <a className="portfolio__link" href="https://github.com/spetrosyan94/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт <span>↗</span></a>
          </li>

          <li className="portfolio__element">
            <a className="portfolio__link" href="https://github.com/spetrosyan94/mesto" target="_blank" rel="noreferrer">Одностраничное приложение <span>↗</span></a>
          </li>

        </ul>

      </div>
    </section>

  )
}

export default Portfolio;

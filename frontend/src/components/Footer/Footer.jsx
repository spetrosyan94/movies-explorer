import React from 'react';
import './Footer.css';

function Footer() {


  return (
    <footer className='footer'>

      <div className='footer__container'>

        <h4 className='footer__title'>Автор: Петросян Сергей.</h4>

        <ul className='footer__list'>

          <li className='footer__element'>
            <a className='footer__link' href="https://practicum.yandex.ru" target='_blank' rel="noreferrer">
              Яндекс.Практикум
            </a>
          </li>

          <li className='footer__element'>
            <a className='footer__link' href="https://github.com/spetrosyan94" target='_blank' rel="noreferrer">
              Github
            </a>
          </li>

          <li className='footer__element footer__order'>
            <time className="footer__datatime" dateTime='2024'>©2024</time>
          </li>

        </ul>


      </div>
    </footer>
  )
}

export default Footer;

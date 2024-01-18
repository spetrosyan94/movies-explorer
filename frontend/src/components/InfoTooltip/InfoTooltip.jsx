import React from "react";
import "./InfoTooltip.css";

import { STATUS_TEXT } from "../../utils/constants";

// Изображения
import InfoOk from "../../images/svg/info-tooltip-ok.svg"
import InfoError from "../../images/svg/info-tooltip-error.svg"

function InfoTooltip(props) {

  return (
    <div className={`popup  ${props.isOpen ? "transition_opened" : ''}`}>
      <div className="popup__container">
        <button className="popup__close-btn popup__close-btn_position_form" type="button" onClick={props.onClose}></button>
        <form className={`popup__form`} method="get" name="popup-infotooltip" onSubmit={props.onClose}>

          <img
            className="popup__image-status"
            src={props.isRegister ? InfoOk : InfoError}
            alt="Статус регистрации">
          </img>
          <h2
            className={`popup__title popup__title_info-tooltip ${props.isError && "popup__title_position_error-info"}`} >
            {props.isRegister ? STATUS_TEXT.ok : STATUS_TEXT.error}
          </h2>

        </form>
      </div>
    </div>
  )
}

export default InfoTooltip;

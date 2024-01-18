import React from "react";
import "./ButtonClose.css";

function ButtonClose(props) {


  return (
    <>
      <button className="button-close" type="button" aria-label="Кнопка закрыть меню" onClick={props.onClick}></button>
    </>
  )
}

export default ButtonClose;

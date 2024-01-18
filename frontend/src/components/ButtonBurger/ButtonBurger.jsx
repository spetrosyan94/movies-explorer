import React from "react";
import "./ButtonBurger.css";

function ButtonBurger(props) {


  return (
    <>
      <button className="button-burger" type="button" onClick={props.onClick}></button>
    </>
  )
}

export default ButtonBurger;

import React from "react";
import "./Overlay.css";

function Overlay(props) {


  return (
    <div className={`overlay ${props.isOpen ? "overlay__active" : ''}`}>
      {props.children}
    </div>
  )
}

export default Overlay;

import React from "react";
import "./ButtonFormSubmit.css";

function ButtonFormSubmit(props) {


  return (
    <>
      <button className="button-form-submit" type="submit" disabled={props.disabled}>{props.textButton}</button>
    </>
  )
}

export default ButtonFormSubmit;

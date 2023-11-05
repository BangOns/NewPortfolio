import React, { useState } from "react";
import "../css/ButtonResumes.scss";
import Row from "../img/rowUp.png";
import DropDown from "./DropDown";
export default function ButtonResume() {
  const [down, SetDown] = useState(false);
  function HandleClick() {
    SetDown(!down);
  }
  return (
    <div className="containerResumeButton">
      <div className="buttonResume" onClick={HandleClick}>
        <div className="IcondropDown">
          <img src={Row} alt="rrow" className={down ? "down" : ""} />
        </div>
        <div className="Resume">Resume</div>
      </div>
      <DropDown dropped={down} />
    </div>
  );
}

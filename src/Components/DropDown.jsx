import React from "react";
import MyCv from "../assets/Cv_Syahroni_English.pdf";
import portfolio from "../assets/Portfolio_Syahroni.pdf";

export default function DropDown({ dropped }) {
  return (
    <div className={`dropDown ${dropped ? "activeDown" : ""}`}>
      <ul className="ListResume">
        <li>
          <a href={MyCv} download="Cv_Syahroni">
            Cv
          </a>
        </li>
        <li>
          <a href={portfolio} download="Resume_Syahroni">
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
}

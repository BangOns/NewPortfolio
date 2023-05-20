import React from "react";
import Alas from "../img/alas.png";
import ReactQ from "../img/react-query.png";
import "../css/OtherTech.scss";
import { dataOther } from "./getData";
function OtherTech() {
  const dataTechOther = dataOther;
  return (
    <section className="Container-Other">
      <header className="judul-Other">
        <h1>Other</h1>
      </header>
      <article className="Container-List-Other">
        <ul className="Other-Container">
          {dataOther.map((other, index) => {
            return (
              <li className="Other" key={index}>
                <figure className="Image-Other">
                  <img src={other} alt="" className="iconOther" />
                  <img src={Alas} alt="" className="alas-iconOther" />
                </figure>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}

export default OtherTech;

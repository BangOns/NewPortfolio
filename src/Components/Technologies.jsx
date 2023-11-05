import React from "react";
import "../css/Technologies.scss";
import Alas from "../img/alas.png";
import { dataTekno } from "./getData";
function Technologies({ darkModes }) {
  const dataTechnologies = dataTekno;
  return (
    <section className="Container-Teknologi" id="teknologi">
      <header className="Judul-Teknologi">
        <h1 className={`${darkModes ? "DarkFonts" : ""}`}>Skills</h1>
      </header>
      <article className="Container-List-Teknologi">
        <ul className="Teknologi-Container">
          {dataTechnologies.map((tech, index) => {
            return (
              <li className="Teknologi" key={index}>
                <figure className="Image-Teknologi">
                  <img src={tech} alt="" className="iconTech" />
                  <img src={Alas} alt="" className="alas-iconTech" />
                </figure>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}

export default Technologies;

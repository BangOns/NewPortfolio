import React from "react";
import "../css/Heading.scss";
import ImageMyFace from "../img/profil1.png";
import ImageMyFace2 from "../img/profil2.png";
import ImageMyFace3 from "../img/profil3.png";
import ButtonResume from "./ButtonResume";
function Heading({ darkModes }) {
  return (
    <section className="Container-Heading">
      <div className="Container-wrap">
        <article className="Container-AboutMe">
          <header className={`${darkModes ? "DarkFonts" : ""}`}>
            <h1>Hello,I’m Syahroni</h1>
            <h3>Front-end Developer</h3>
            <p>
              I am interested in front-end development, complemented by skills
              in various modern technologies and frameworks. With my skills, I
              have successfully developed several web projects and proficiency
              in designing attractive and responsive interfaces. In addition, I
              have strong collaborative skills and am ready to work with a team
              and new challenges in the technology industry.
            </p>
          </header>

          <ButtonResume />
        </article>
        <figure className="Container-Image">
          <img
            src={
              innerWidth < 600
                ? ImageMyFace3
                : innerWidth >= 600 && innerWidth < 974
                ? ImageMyFace2
                : innerWidth >= 974 && ImageMyFace
            }
            alt="myFace"
          />
        </figure>
      </div>
    </section>
  );
}

export default Heading;

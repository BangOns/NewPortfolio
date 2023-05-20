import React from "react";
import "../css/Heading.scss";
import ImageMyFace from "../img/profil1.png";
import ImageMyFace2 from "../img/profil2.png";
import ImageMyFace3 from "../img/profil3.png";
import MyCv from "../assets/Cv_Syahroni.pdf";
function Heading() {
  return (
    <section className="Container-Heading">
      <div className="Container-wrap">
        <article className="Container-AboutMe">
          <header>
            <h1>Hello,I’m Syahroni</h1>
            <h3>Front-end Developer</h3>
            <p>
              I am a student with a keen interest in front-end development,
              equipped with skills in various modern technologies and
              frameworks. With my expertise, I have successfully developed
              several web projects that demonstrate my creativity and
              proficiency in designing attractive and responsive interfaces.
              Additionally, I possess strong collaborative abilities and am
              ready to work with dedication alongside a solid team, prepared to
              take on new challenges in the technology industry.
            </p>
          </header>
          <div className="LinkResume">
            <a href={MyCv} download="Resume">
              Resume
            </a>
          </div>
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
            alt=""
          />
        </figure>
      </div>
    </section>
  );
}

export default Heading;

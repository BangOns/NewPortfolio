import React from "react";
import "../css/Projects.scss";
import ImageLinkReply from "../img/Reply.png";
import ImageLinkGithub from "../img/githubWeb.png";
import { dataProject } from "./getData";
function Projects({ darkModes }) {
  const dataProjects = dataProject;
  return (
    <section className="Container-Projects" id="project">
      <header className="Judul-Projects">
        <h1 className={`${darkModes ? "DarkFonts" : ""}`}>Projects</h1>
      </header>
      <article className="Container-List-Project">
        {dataProjects.map((project, index) => {
          return (
            <section className="Project" key={index}>
              <div className="Project-Link">
                {project.hasOwnProperty("linkWeb") ? (
                  <>
                    <a href={project?.linkWeb} target="_blank">
                      <img src={ImageLinkReply} alt="" />
                    </a>
                    <a href={project.linkGithub} target="_blank">
                      <img src={ImageLinkGithub} alt="" />
                    </a>
                  </>
                ) : (
                  <>
                    <a href={project.linkGithub} target="_blank">
                      <img src={ImageLinkGithub} alt="" />
                    </a>
                  </>
                )}
              </div>
              <figure className="Project-Image">
                <img src={project.imageWeb} alt="" />
              </figure>
              <figcaption className="Project-Text">
                <p className={`Project-Text1 ${darkModes ? "DarkFonts" : ""}`}>
                  {project.namaWeb}
                </p>
                <p className={`Project-Text2 ${darkModes ? "DarkFonts" : ""}`}>
                  {project.TechStack}
                </p>
              </figcaption>
            </section>
          );
        })}
      </article>
    </section>
  );
}

export default Projects;

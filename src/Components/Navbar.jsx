import React from "react";
import "../css/Navbar.scss";
import { SocmedTop } from "./getData";

function Navbar() {
  const MyDataSoc = SocmedTop;
  function GetPage(e) {
    e.preventDefault();
    let id = e.currentTarget.getAttribute("href").slice(1);
    let element = document.getElementById(id);
    let NavHeight = document
      .querySelector(".Container-navbar")
      .getBoundingClientRect().height;
    let Position = element.offsetTop - NavHeight;

    window.scrollTo({
      left: 0,
      top: Position,
    });
  }
  return (
    <header className="Container-navbar">
      <div className="judul" onClick={() => window.scrollTo(0, 0)}>
        <h1>Portofolio.me</h1>
      </div>
      <nav className="categories">
        <ul className="categories-container">
          <li>
            <a href="#teknologi" onClick={GetPage}>
              <p>Technologies</p>
            </a>
          </li>
          <li>
            <a href="#project" onClick={GetPage}>
              <p>Projects</p>
            </a>
          </li>
          <li>
            <a href="#kontak" onClick={GetPage}>
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="social-media">
        <ul className="sosial-media-container">
          {MyDataSoc.map((social, index) => {
            return (
              <li key={index}>
                <a href={social.LinkWeb}>
                  <figure>
                    <img src={social.ImageWeb} alt="" />
                  </figure>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

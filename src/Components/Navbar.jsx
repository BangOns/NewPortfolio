import React, { useEffect, useState } from "react";
import "../css/Navbar.scss";
import { SocmedTop } from "./getData";
import Lamp from "../img/lamp.png";

function Navbar({ setDark }) {
  const MyDataSoc = SocmedTop;
  const [Darkmode, setDarkMode] = useState(false);
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

  useEffect(() => {
    setDark(Darkmode);
  }, [Darkmode]);
  return (
    <header className={`Container-navbar ${Darkmode ? "DarkBg" : ""}`}>
      <div className="judul" onClick={() => window.scrollTo(0, 0)}>
        <h1 className={`${Darkmode ? "DarkFont" : ""}`}>Syahroni</h1>
      </div>
      <nav className="categories">
        <ul className={`categories-container`}>
          <li>
            <a href="#project" onClick={GetPage}>
              <p className={`${Darkmode ? "DarkFont" : ""}`}>Projects</p>
            </a>
          </li>
          <li>
            <a href="#teknologi" onClick={GetPage}>
              <p className={`${Darkmode ? "DarkFont" : ""}`}>Skills</p>
            </a>
          </li>
          <li>
            <a href="#kontak" onClick={GetPage}>
              <p className={`${Darkmode ? "DarkFont" : ""}`}>Contact</p>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="social-media">
        <ul className="sosial-media-container">
          <li>
            <figure
              className={`Lamp  ${Darkmode ? "on" : ""}`}
              onClick={() => setDarkMode(!Darkmode)}
            >
              <img
                src={Lamp}
                alt=""
                style={{ cursor: "pointer" }}
                className={` ${Darkmode ? "DarkIcon" : ""}`}
              />
            </figure>
          </li>
          {MyDataSoc.map((social, index) => {
            return (
              <li key={index}>
                <a href={social.LinkWeb}>
                  <figure>
                    <img
                      src={social.ImageWeb}
                      alt=""
                      className={` ${Darkmode ? "DarkIcon" : ""}`}
                    />
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

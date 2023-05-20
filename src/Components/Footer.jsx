import React from "react";
import "../css/Footer.scss";
import { SocmedTop } from "./getData";
function Footer() {
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
    <div className="Container-Footer">
      <section className="Container-Footer1">
        <header className="Container-navbar-Footer">
          <div className="judul-Footer" onClick={() => window.scrollTo(0, 0)}>
            <h1>Portofolio.me</h1>
          </div>
          <nav className="categories-Footer">
            <ul className="categories-container-Footer">
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
          <nav className="social-media-Footer">
            <ul className="sosial-media-container-Footer">
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
      </section>
      <section className="Container-copyright">
        <header className="copyright">
          <p>Copyright &copy; Syahroni | All Ready Reserved</p>
        </header>
      </section>
    </div>
  );
}

export default Footer;

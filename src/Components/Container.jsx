import React, { useState } from "react";
import "../css/Container.scss";
import Navbar from "./Navbar";
import Heading from "./Heading";
import Projects from "./Projects";
import Technologies from "./Technologies";
import OtherTech from "./OtherTech";
import Contact from "./Contact";
import Footer from "./Footer";
function Container() {
  const [Darkmode, setDarkMode] = useState(false);
  function Dark(state) {
    setDarkMode(state);
  }
  return (
    <div className={`Container-Page ${Darkmode ? "DarkBg" : ""}`}>
      <div className="Container-Kotak">
        <Navbar setDark={Dark} />
        <main>
          <Heading darkModes={Darkmode} />
          <Projects darkModes={Darkmode} />
          <Technologies darkModes={Darkmode} />
          <OtherTech darkModes={Darkmode} />
        </main>
        <aside>
          <Contact darkModes={Darkmode} />
        </aside>
        <footer className="Footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Container;

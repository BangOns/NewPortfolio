import React from "react";
import "../css/Container.scss";
import Navbar from "./Navbar";
import Heading from "./Heading";
import Projects from "./Projects";
import Technologies from "./Technologies";
import OtherTech from "./OtherTech";
import Contact from "./Contact";
import Footer from "./Footer";
function Container() {
  return (
    <div className="Container-Page">
      <div className="Container-Kotak">
        <Navbar />
        <main>
          <Heading />
          <Projects />
          <Technologies />
          <OtherTech />
        </main>
        <aside>
          <Contact />
        </aside>
        <footer className="Footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Container;

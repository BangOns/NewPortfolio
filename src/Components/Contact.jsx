import React, { useEffect, useState } from "react";
import "../css/Contact.scss";
import "../css/Loaders.scss";

import { Socmed } from "./getData";
function Contact() {
  const dataSocmed = Socmed;
  const [nama, setNama] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handlerSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      setLoading(true);
    }, 100);
    setNama("");
    setMessage("");
  }
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);
  return (
    <section className="Container-Aside" id="kontak">
      <header className="Judul-Aside">
        <h1>Contact</h1>
      </header>
      <article className="Form-Aside">
        <div className="Text-Aside">
          <p>Send us a Message!</p>
          <p>
            Hello, do you have a <strong>question</strong> for me?
          </p>
        </div>
        <form onSubmit={handlerSubmit} className="Form">
          <div className="inputName">
            <input
              type="text"
              placeholder="Name"
              value={nama}
              required
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="inputMessage">
            <textarea
              name=""
              id=""
              cols="null"
              rows="null"
              required
              style={{ resize: "none" }}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="buttonSubmit">
            <button type="submit" disabled={!loading ? false : true}>
              {!loading ? "Submit" : <span class="loader"></span>}
            </button>
          </div>
        </form>
      </article>
      <article className="Socmed-Aside">
        <header className="Judul-Socmed">
          <h1>
            Let's <strong>Talk!</strong>
          </h1>
        </header>
        <div className="List-MySocmed">
          <ul className="Container-List-MySocmed">
            {dataSocmed.map((socmed, index) => {
              return (
                <li className="MySocmed" key={index}>
                  <a href={socmed.LinkWeb} target="_blank">
                    <figure className="Image-MySocmed">
                      <img src={socmed.ImageWeb} alt="" />
                    </figure>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </section>
  );
}

export default Contact;
